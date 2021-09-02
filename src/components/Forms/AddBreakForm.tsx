import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';

import {
  Break_Type_Enum,
  InsertBreakMutation,
  UpdateBreakMutation,
  useInsertBreakMutation,
  useUpdateBreakMutation,
  useGetInventoryQuery,
  useUpdateInventoryBreakMutation,
} from '@generated/graphql';

import { auth, functions } from '@config/firebase';
import { gridSpace } from '@config/chakra/constants';
import { BreakTypeValues } from '@config/values';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Select,
  Textarea,
  Spinner,
  Heading,
  Text,
} from '@chakra-ui/react';

import ImageUploader from '@components/ImageUploader';
import AutocompleteEvents from '@components/AutocompleteEvents';

const schema = yup.object().shape({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
  event_id: yup.string().required('Required'),
  break_type: yup.string().required('Required'),
  image: yup.string().required('Image is Required'),
  spots: yup
    .number()
    .transform((cv) => (isNaN(cv) ? undefined : cv))
    .when('break_type', {
      is: (val: string) => val && val !== Break_Type_Enum.Personal,
      then: yup
        .number()
        .typeError('Must be a number')
        .integer('Must be an whole number')
        .min(1, 'Must be greater than 0')
        .required('Required'),
    }),
  teams_per_spot: yup
    .number()
    .transform((cv) => (isNaN(cv) ? undefined : cv))
    .when('break_type', {
      is: (val: string) =>
        val &&
        (val === Break_Type_Enum.RandomTeam ||
          val === Break_Type_Enum.RandomDivision),
      then: yup
        .number()
        .typeError('Must be a number')
        .integer('Must be an whole number')
        .min(1, 'Must be greater than 0')
        .required('Required'),
    }),
  price: yup
    .number()
    .transform((cv) => (isNaN(cv) ? undefined : cv))
    .when('break_type', {
      is: (val: string) =>
        val &&
        val !== Break_Type_Enum.PickYourTeam &&
        val !== Break_Type_Enum.PickYourDivision,
      then: yup
        .number()
        .typeError('Must be a number')
        .test('is-currency', 'Must be a valid price', (value) => {
          const currRegex = /^[1-9]\d*(\.\d{1,2})?$/;

          return value ? currRegex.test(String(value)) : false;
        })
        .min(0, 'Must be greater than 0')
        .required('Required'),
    }),
  lineItems: yup.array().of(
    yup.object().shape({
      value: yup.string().required('Required'),
      cost: yup
        .number()
        .typeError('Must be a number')
        .test('is-currency', 'Must be a valid price', (value) => {
          const currRegex = /^[1-9]\d*(\.\d{1,2})?$/;

          return value ? currRegex.test(String(value)) : false;
        })
        .min(0, 'Must be greater than 0')
        .required('Required'),
    }),
  ),
  datasetItems: yup.array().of(
    yup.object().shape({
      value: yup.string().required('Required'),
    }),
  ),
});

type TInventoryAutcomplete = {
  label: string;
  value: string;
};

type TBreakLineItem = {
  value: string;
  cost: number;
};

type TDatasetLineItem = {
  value: string;
};

type TFormData = {
  id?: string;
  title: string;
  description: string;
  event_id: string;
  image: string;
  break_type: Break_Type_Enum;
  spots: number;
  teams_per_spot?: number | null;
  price: number;
  lineItems: {
    value: string;
    cost: number;
  }[];
  datasetItems: {
    value: string;
  }[];
};

type TFormProps = {
  event_id?: string;
  event_title?: string;
  break_data?: {
    id?: string;
    title: string;
    description: string;
    image: string;
    break_type: string;
    spots: number;
    teams_per_spot?: number | null | undefined;
    price?: number | null;
    line_items?: TBreakLineItem[];
    dataset?: TDatasetLineItem[];
    status: string;
    BreakProductItems: {
      id: string;
      title: string;
      price: number;
    }[];
  };
  callback: () => void;
};

/**
 *
 * TODO: Handle errors
 * TODO: Validate products are chosen
 * TODO: Show selected products on edit
 */
const AddBreakForm: React.FC<TFormProps> = ({
  event_id,
  event_title,
  break_data,
  callback,
}) => {
  // Get firebase function
  const createBreakProducts = functions.httpsCallable('createBreakProducts');
  const [isLoading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const operation = break_data ? 'UPDATE' : 'ADD';
  const [pickerInventory, setPickerInventory] = useState<
    TInventoryAutcomplete[]
  >([]);
  const [selectedInventory, setSelectedInventory] = useState<
    TInventoryAutcomplete[]
  >([]);
  const [breakLineItems, setBreakLineItems] = useState<TBreakLineItem[]>([]);

  const onInsertComplete = (data: InsertBreakMutation) => {
    const breakId = data.insert_Breaks_one?.id;
    const inventoryIds = selectedInventory.map((item) => item.value);

    createBreakProducts({
      breakData: data.insert_Breaks_one,
      lineItems: breakLineItems,
    }).then(() => {
      updateInventory({
        variables: {
          ids: inventoryIds,
          breakId,
        },
      });
    });
  };

  const onUpdateComplete = (data: UpdateBreakMutation) => {
    const breakId = data.update_Breaks_by_pk?.id;
    const inventoryIds = selectedInventory.map((item) => item.value);

    updateInventory({
      variables: {
        ids: inventoryIds,
        breakId,
      },
    });
  };

  const handleCreateItem = (item: TInventoryAutcomplete) => {
    setPickerInventory((curr) => [...curr, item]);
    setSelectedInventory((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (
    selectedItems: TInventoryAutcomplete[] | undefined,
  ) => {
    if (selectedItems) {
      setSelectedInventory(selectedItems);
    }
  };

  const {
    loading: inventoryQueryLoading,
    error: inventoryQueryError,
    data: inventoryQueryData,
  } = useGetInventoryQuery({
    onCompleted: (data) => {
      const selectedItemsIndex: number[] = [];
      const pickerItems: TInventoryAutcomplete[] = [];
      const selectedItems: TInventoryAutcomplete[] = [];

      for (let idx = 0; idx < data.Inventory?.length; idx++) {
        if (data.Inventory[idx].break_id === null) {
          pickerItems.push({
            label: `${data.Inventory[idx].Product?.description} - ${data.Inventory[idx].location}`,
            value: data.Inventory[idx].id,
          });
        }

        if (data.Inventory[idx].break_id === break_data?.id) {
          pickerItems.push({
            label: `${data.Inventory[idx].Product?.description} - ${data.Inventory[idx].location}`,
            value: data.Inventory[idx].id,
          });

          selectedItems.push(pickerItems[pickerItems.length - 1]);
        }
      }

      setPickerInventory(pickerItems);
      setSelectedInventory(selectedItems);
    },
  });

  const [
    addBreak,
    {
      data: addBreakMutationData,
      loading: addBreakMutationLoading,
      error: addBreakMutationError,
    },
  ] = useInsertBreakMutation({ onCompleted: onInsertComplete });

  const [
    updateBreak,
    {
      data: updateBreakMutationData,
      loading: updateBreakMutationLoading,
      error: updateBreakMutationError,
    },
  ] = useUpdateBreakMutation({ onCompleted: onUpdateComplete });

  const [
    updateInventory,
    {
      data: updateInventoryMutationData,
      loading: updateInventoryMutationLoading,
      error: updateInventoryMutationError,
    },
  ] = useUpdateInventoryBreakMutation({
    onCompleted: () => {
      setLoading(false);
      callback();
    },
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      event_id: event_id,
      ...(break_data || {}),
      price: break_data && break_data.price ? break_data.price : undefined,
      break_type: BreakTypeValues.find(
        (b) => b.value === break_data?.break_type,
      )?.value,
      lineItems: break_data
        ? break_data.BreakProductItems.map((item) => ({
            value: item.title,
            cost: item.price,
          }))
        : [],
      datasetItems: break_data && break_data.dataset ? break_data.dataset : [],
    },
  });

  const { fields: lineItemFields } = useFieldArray({
    control,
    name: 'lineItems',
  });

  const { fields: datasetFields } = useFieldArray({
    control,
    name: 'datasetItems',
  });

  const watchType = watch('break_type');
  const watchSpots = watch('spots');
  const watchTeamsPerSpot = watch('teams_per_spot');
  const watchLineItems = watch('lineItems');
  const watchDatasetItems = watch('datasetItems');

  // Change Line or Data Items
  useEffect(() => {
    // Set line items for pick your team or division
    if (
      !isNaN(Number(watchSpots)) &&
      (watchType === Break_Type_Enum.PickYourTeam ||
        watchType === Break_Type_Enum.PickYourDivision)
    ) {
      const newLineItems = [];

      for (let i = 0; i < Number(watchSpots); i++) {
        newLineItems.push({ value: '', cost: 0 });
      }

      setValue('lineItems', newLineItems);
    } else {
      setValue('lineItems', []);
    }

    // Set line items for random team or division
    if (
      !isNaN(Number(watchSpots)) &&
      !isNaN(Number(watchTeamsPerSpot)) &&
      (watchType === Break_Type_Enum.RandomDivision ||
        watchType === Break_Type_Enum.RandomTeam)
    ) {
      const newDatasetItems = [];

      for (let i = 0; i < Number(watchSpots) * Number(watchTeamsPerSpot); i++) {
        newDatasetItems.push({ value: '' });
      }

      setValue('datasetItems', newDatasetItems);
    } else {
      setValue('datasetItems', []);
    }
  }, [watchSpots, watchType, watchTeamsPerSpot]);

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFormData) => {
    if (user) {
      setLoading(true);

      setBreakLineItems(result.lineItems);

      const submitData = {
        event_id: result.event_id,
        title: result.title,
        description: result.description,
        image: result.image,
        spots:
          result.break_type === Break_Type_Enum.Personal
            ? selectedInventory.length
            : result.spots,
        teams_per_spot: result.teams_per_spot ? result.teams_per_spot : null,
        break_type: result.break_type,
        price: result.price,
        dataset:
          result.datasetItems.length > 0
            ? result.datasetItems.map((item) => ({ value: item.value }))
            : null,
      };

      switch (operation) {
        case 'ADD':
          addBreak({
            variables: {
              data: submitData,
            },
          });
          break;
        case 'UPDATE':
          updateBreak({
            variables: {
              id: break_data?.id,
              data: submitData,
            },
          });
      }
    }
  };

  return (
    <Box position="relative">
      {isLoading && (
        <Flex
          position="absolute"
          bg="white"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity="0.7"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="lg" />
        </Flex>
      )}
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box mb={5}>
          <ImageUploader
            imagePath={break_data?.image}
            imageFolder="breaks"
            callback={(url: string) => {
              setValue('image', url);
            }}
          />
        </Box>

        {errors.image && (
          <Text textAlign="center" color="red" fontSize="sm" mb={5}>
            {errors.image?.message}
          </Text>
        )}

        <FormControl isInvalid={!!errors.event_id} mb={5}>
          <FormLabel>Event ID</FormLabel>
          <AutocompleteEvents
            isInvalid={!!errors.event_id}
            defaultValue={event_title}
            callback={(val: string) => {
              setValue('event_id', val);
            }}
          />
          <FormErrorMessage>{errors.event_id?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.title} mb={5}>
          <FormLabel>Title</FormLabel>
          <Input {...register('title')} />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description} mb={5}>
          <FormLabel>Description</FormLabel>
          <Textarea {...register('description')} />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <CUIAutoComplete
            tagStyleProps={{
              display: 'flex',
              marginBottom: '4px !important',
              marginInlineStart: '0px !important',
            }}
            label="Select products"
            placeholder="Type a product description"
            onCreateItem={handleCreateItem}
            items={pickerInventory}
            selectedItems={selectedInventory}
            onSelectedItemsChange={(changes) => {
              handleSelectedItemsChange(changes.selectedItems);
            }}
            hideToggleButton={true}
            disableCreateItem={true}
          />
        </FormControl>

        <Flex mx={gridSpace.parent} mb={5}>
          <FormControl
            isInvalid={!!errors.break_type}
            width="50%"
            px={gridSpace.child}
          >
            <FormLabel>Break Type</FormLabel>
            <Select {...register('break_type')}>
              <option value="">Select...</option>
              {BreakTypeValues.map((type) => (
                <option key={`option-${type.label}`} value={type.value}>
                  {type.label}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.break_type?.message}</FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex mx={gridSpace.parent} mb={10}>
          {(watchType === Break_Type_Enum.HitDraft ||
            watchType === Break_Type_Enum.Personal ||
            watchType === Break_Type_Enum.RandomDivision ||
            watchType === Break_Type_Enum.RandomTeam) && (
            <FormControl
              isInvalid={!!errors.price}
              width={1 / 3}
              px={gridSpace.child}
            >
              <FormLabel>Price ($)</FormLabel>
              <Input {...register('price')} />
              <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
            </FormControl>
          )}

          {(watchType === Break_Type_Enum.HitDraft ||
            watchType === Break_Type_Enum.PickYourDivision ||
            watchType === Break_Type_Enum.PickYourTeam ||
            watchType === Break_Type_Enum.RandomDivision ||
            watchType === Break_Type_Enum.RandomTeam) && (
            <FormControl
              isInvalid={!!errors.spots}
              width={1 / 3}
              px={gridSpace.child}
            >
              <FormLabel>Spots</FormLabel>
              <Input {...register('spots')} />
              <FormErrorMessage>{errors.spots?.message}</FormErrorMessage>
            </FormControl>
          )}

          {(watchType === Break_Type_Enum.RandomDivision ||
            watchType === Break_Type_Enum.RandomTeam) && (
            <FormControl
              isInvalid={!!errors.teams_per_spot}
              width={1 / 3}
              px={gridSpace.child}
            >
              <FormLabel>Teams Per Spot</FormLabel>
              <Input {...register('teams_per_spot')} />
              <FormErrorMessage>
                {errors.teams_per_spot?.message}
              </FormErrorMessage>
            </FormControl>
          )}
        </Flex>

        {watchDatasetItems?.length > 0 && (
          <Box mb={10}>
            <Heading size="sm" mb={2}>
              Randomization Items
            </Heading>
            <Box mb={4}>
              {datasetFields.map((field, index) => (
                <FormControl
                  key={field.id}
                  isInvalid={
                    errors.datasetItems && !!errors.datasetItems[index]?.value
                  }
                  mb={2}
                >
                  <Input
                    placeholder="Team/Division"
                    {...register(`datasetItems.${index}.value` as const)}
                  />
                </FormControl>
              ))}
            </Box>
          </Box>
        )}

        {watchLineItems?.length > 0 && (
          <Box mb={10}>
            <Heading size="sm" mb={2}>
              Line Items
            </Heading>
            {lineItemFields.map((field, index) => (
              <Flex key={field.id} mx={gridSpace.parent} mb={2}>
                <FormControl
                  isInvalid={
                    errors.lineItems && !!errors.lineItems[index]?.value
                  }
                  width="70%"
                  px={gridSpace.child}
                >
                  <Input
                    placeholder="Team/Division"
                    {...register(`lineItems.${index}.value` as const)}
                  />
                </FormControl>
                <FormControl
                  isInvalid={
                    errors.lineItems && !!errors.lineItems[index]?.cost
                  }
                  width="30%"
                  px={gridSpace.child}
                >
                  <Input
                    placeholder="Cost"
                    {...register(`lineItems.${index}.cost` as const)}
                    textAlign="right"
                  />
                </FormControl>
              </Flex>
            ))}
          </Box>
        )}

        <Flex justifyContent="center">
          <Button mb={4} px={10} colorScheme="blue" type="submit">
            {operation === 'UPDATE' ? 'Update Break' : 'Add Break'}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default AddBreakForm;
