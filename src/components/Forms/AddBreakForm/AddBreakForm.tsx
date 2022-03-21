import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';

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
  Heading,
  Text,
} from '@chakra-ui/react';

import {
  Break_Type_Enum,
  InsertBreakMutation,
  UpdateBreakMutation,
  useInsertBreakMutation,
  useUpdateBreakMutation,
  useUpdateInventoryBreakMutation,
  useGetTeamDataLazyQuery,
  useGetDivisionDataLazyQuery,
  useGetProductIitemsWithOrderIdByBreakIdLazyQuery,
} from '@generated/graphql';

import { auth, functions } from '@config/firebase';
import { gridSpace } from '@config/chakra/constants';
import { BreakTypeValues } from '@config/values';

import ImageUploader from '@components/ImageUploader';
import AutocompleteEvents from '@components/AutocompleteEvents';
import LoadingSpinner from '@components/LoadingSpinner';

import { TInventoryAutcomplete } from '@customTypes/inventory';
import {
  TBreakLineItem,
  TDatasetLineItem,
  TAddBreakFormData,
  TAddBreakFormProps,
} from '@customTypes/breaks';

import { schema } from './AddBreakForm.schema';
import useGetInventory from './use-get-inventory.hook';
import {
  getNewDatasetItems,
  getNewLineItems,
  getQueryVars,
  getSpotOptions,
} from './AddBreakForm.utils';

/**
 *
 * TODO: Handle errors
 * TODO: Validate products are chosen
 */
const AddBreakForm: React.FC<TAddBreakFormProps> = ({
  event_id,
  event_title,
  break_data,
  callback,
}) => {
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

  const handleSelectedItemsChange = (
    selectedItems: TInventoryAutcomplete[] | undefined,
  ) => {
    if (selectedItems) {
      setSelectedInventory(selectedItems);
    }
  };

  // custom hook to grab current inventory
  useGetInventory(setPickerInventory, setSelectedInventory, break_data);

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

  const [
    getTeams,
    { loading: teamDataLoading, data: teamData },
  ] = useGetTeamDataLazyQuery();

  const [
    getDivisions,
    { loading: divisionDataLoading, data: divisionData },
  ] = useGetDivisionDataLazyQuery();

  const [getItemsWithOrderByBreak, {data: itemsWithOrderData }] = useGetProductIitemsWithOrderIdByBreakIdLazyQuery();
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    if (break_data?.id && operation === 'UPDATE') getItemsWithOrderByBreak({ variables: { id: break_data.id } });
  }, [break_data, operation]);

  useEffect(() => setIsPurchased((itemsWithOrderData?.BreakProductItems.length || 0) > 0), [itemsWithOrderData]);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<TAddBreakFormData>({
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

  const {
    fields: lineItemFields,
    replace: replaceLineItemFields,
  } = useFieldArray({
    control,
    name: 'lineItems',
  });

  const {
    fields: datasetFields,
    replace: replaceDatasetFields,
  } = useFieldArray({
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
    replaceLineItemFields([]);
    replaceDatasetFields([]);
    switch (watchType) {
      case Break_Type_Enum.PickYourTeam: {
        return replaceLineItemFields(
          getNewLineItems(teamData?.Teams as TBreakLineItem[], [
            'short_code',
            'city+name',
            'cost',
          ]),
        );
      }
      case Break_Type_Enum.PickYourDivision: {
        return replaceLineItemFields(
          getNewLineItems(divisionData?.Divisions as TBreakLineItem[], [
            'short_code',
            'name',
            'cost',
          ]),
        );
      }
      case Break_Type_Enum.RandomTeam: {
        teamData &&
          watchSpots &&
          setValue(
            'teams_per_spot',
            Number(teamData?.Teams.length / watchSpots),
          );
        return replaceDatasetFields(
          getNewDatasetItems(
            teamData?.Teams as TDatasetLineItem[],
            (Number(watchSpots) * Number(watchTeamsPerSpot)) as number,
            ['short_code', 'city', 'name', 'color', 'color_secondary'],
          ),
        );
      }
      case Break_Type_Enum.RandomDivision: {
        divisionData &&
          watchSpots &&
          setValue(
            'teams_per_spot',
            Number(divisionData?.Divisions.length / watchSpots),
          );

        return replaceDatasetFields(
          getNewDatasetItems(
            divisionData?.Divisions as TDatasetLineItem[],
            divisionData?.Divisions.length as number,
            ['short_code', 'name', 'color', 'color_secondary'],
          ),
        );
      }
      default: {
        replaceLineItemFields([]);
        replaceDatasetFields([]);
      }
    }
  }, [watchSpots, watchType, watchTeamsPerSpot, teamData, divisionData]);

  useEffect(() => {
    setValue('spots', operation === 'UPDATE' ? watchSpots : null);
    setValue('teams_per_spot', operation === 'UPDATE' ? (teamData?.Teams.length || null) : null);
    if (selectedInventory.length > 0) {
      const { sport, year } = getQueryVars(selectedInventory);
      getTeams({ variables: { year, sport } });
      getDivisions({ variables: { sport } });
    }
  }, [selectedInventory, watchType]);

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TAddBreakFormData) => {
    if (user) {
      setLoading(true);

      setBreakLineItems(result.lineItems);
      console.log(result);
      const submitData = {
        event_id: result.event_id,
        title: result.title,
        description: result.description,
        image: result.image,
        spots:
          result.spots
            ? result.spots
            : result.break_type === Break_Type_Enum.Personal
              ? selectedInventory.length
              : result.lineItems.length,
        teams_per_spot: result.teams_per_spot ? result.teams_per_spot : null,
        break_type: result.break_type,
        price: result.price,
        dataset:
          result.datasetItems.length > 0
            ? result.datasetItems.map((item) => ({
                city: item.city || '',
                name: item.name,
                short_code: item.short_code,
                color: item.color,
                color_secondary: item.color_secondary,
              }))
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
      {isLoading && <LoadingSpinner />}
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
            <Select
              {...register('break_type')}
              isDisabled={isPurchased}
            >
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
          {/* PRICE INPUT (GLOBAL) */}
          {watchType &&
            watchType !== Break_Type_Enum.PickYourTeam &&
            watchType !== Break_Type_Enum.PickYourDivision && (
              <FormControl
                isInvalid={!!errors.price}
                width={1 / 3}
                px={gridSpace.child}
              >
                <FormLabel>Price ($)</FormLabel>
                <Input
                  {...register('price')}
                  isDisabled={isPurchased}
                />
                <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
              </FormControl>
            )}

          {/* SPOTS INPUT */}
          {watchType &&
            watchType !== Break_Type_Enum.Personal &&
            watchType !== Break_Type_Enum.PickYourTeam &&
            watchType !== Break_Type_Enum.PickYourDivision && (
              <FormControl
                isInvalid={!!errors.spots}
                width={1 / 3}
                px={gridSpace.child}
              >
                <FormLabel>Spots</FormLabel>
                <Select
                  {...register('spots')}
                  value={watchSpots ? watchSpots : ''}
                  isDisabled={isPurchased}
                >
                  <option value="">Select...</option>
                  {getSpotOptions(
                    watchType,
                    watchType === Break_Type_Enum.RandomTeam
                      ? (teamData?.Teams.length as number)
                      : (divisionData?.Divisions.length as number),
                  ).map((num) => (
                    <option key={`spots-${num}`} value={num}>
                      {num}
                    </option>
                  ))}
                </Select>
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
              <FormLabel>
                {`${
                  watchType === Break_Type_Enum.RandomTeam
                    ? 'Teams'
                    : 'Divisions'
                }`}{' '}
                per spot
              </FormLabel>
              <Input {...register('teams_per_spot')} isDisabled />
              <FormErrorMessage>
                {errors.teams_per_spot?.message}
              </FormErrorMessage>
            </FormControl>
          )}
        </Flex>

        {/* RANDOM TEAMS / RANDOM DIVISION */}
        {watchDatasetItems?.length > 0 && (
          <Box mb={10}>
            <Heading size="sm" mb={2}>
              Teams/Divisions List
            </Heading>
            <Box mb={4}>
              {datasetFields.map((field, index) => (
                <Flex key={field.id} mx={-1}>
                  <Box width="75px" px={1}>
                    <FormControl
                      isInvalid={
                        errors.datasetItems &&
                        !!errors.datasetItems[index]?.short_code
                      }
                      mb={2}
                    >
                      <Input
                        placeholder="Short"
                        {...register(
                          `datasetItems.${index}.short_code` as const,
                        )}
                        isDisabled={isPurchased}
                      />
                    </FormControl>
                  </Box>

                  {watchType === Break_Type_Enum.RandomTeam && (
                    <Box flex="1" px={1}>
                      <FormControl
                        isInvalid={
                          errors.datasetItems &&
                          !!errors.datasetItems[index]?.city
                        }
                        mb={2}
                      >
                        <Input
                          placeholder="City"
                          {...register(`datasetItems.${index}.city` as const)}
                          isDisabled={isPurchased}
                        />
                      </FormControl>
                    </Box>
                  )}

                  <Box flex="1" px={1}>
                    <FormControl
                      isInvalid={
                        errors.datasetItems &&
                        !!errors.datasetItems[index]?.name
                      }
                      mb={2}
                    >
                      <Input
                        placeholder="Team/Division"
                        {...register(`datasetItems.${index}.name` as const)}
                        isDisabled={isPurchased}
                      />
                    </FormControl>
                  </Box>

                  <Box width="110px" px={1}>
                    <FormControl
                      isInvalid={
                        errors.datasetItems &&
                        !!errors.datasetItems[index]?.color
                      }
                      mb={2}
                    >
                      <Input
                        placeholder="Color 1"
                        {...register(`datasetItems.${index}.color` as const)}
                        isDisabled={isPurchased}
                      />
                    </FormControl>
                  </Box>

                  <Box width="110px" px={1}>
                    <FormControl
                      isInvalid={
                        errors.datasetItems &&
                        !!errors.datasetItems[index]?.color_secondary
                      }
                      mb={2}
                    >
                      <Input
                        placeholder="Color 2"
                        {...register(
                          `datasetItems.${index}.color_secondary` as const,
                        )}
                        isDisabled={isPurchased}
                      />
                    </FormControl>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
        )}

        {watchLineItems?.length > 0 && (
          <Box mb={10}>
            <Heading size="sm" mb={2}>
              Line Items
            </Heading>
            <Box mb={4}>
              {lineItemFields.map((field, index) => (
                <Flex key={field.id} mx={-1}>
                  <Box width="85px" px={1}>
                    <FormControl
                      isInvalid={
                        errors.lineItems &&
                        !!errors.lineItems[index]?.short_code
                      }
                      mb={2}
                    >
                      <Input
                        placeholder="Short"
                        {...register(`lineItems.${index}.short_code` as const)}
                        isDisabled={isPurchased}
                      />
                    </FormControl>
                  </Box>
                  <Box flex="1" px={1}>
                    <FormControl
                      isInvalid={
                        errors.lineItems && !!errors.lineItems[index]?.name
                      }
                      mb={2}
                    >
                      <Input
                        placeholder="Team/Division"
                        {...register(`lineItems.${index}.name` as const)}
                        isDisabled={isPurchased}
                      />
                    </FormControl>
                  </Box>
                  <Box width="120px">
                    <FormControl
                      isInvalid={
                        errors.lineItems && !!errors.lineItems[index]?.cost
                      }
                      mb={2}
                    >
                      <Input
                        placeholder="Cost"
                        {...register(`lineItems.${index}.cost` as const)}
                        textAlign="right"
                        isDisabled={isPurchased}
                      />
                    </FormControl>
                  </Box>
                </Flex>
              ))}
            </Box>
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
