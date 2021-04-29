import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  Flex,
  Heading,
  Checkbox,
  HStack,
  Box,
} from '@chakra-ui/react';

import {
  useInsertSkuMutation,
  useUpdateSkuMutation,
  Sku_Type_Enum,
} from '@generated/graphql';
import { SKUTypeValues } from '@config/values';
import { gridSpace } from '@config/chakra/constants';

const schema = yup.object().shape({
  sku_id: yup.string().required('Required'),
  sku_type: yup.string().required('Required'),
  location: yup.string().required('Required'),
  year1: yup
    .number()
    .integer()
    .typeError('Numbers only')
    .min(1900, '> ${min}')
    .required('Required'),
  year2: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only'),
  manufacturer: yup.string().required('Required'),
  brand: yup.string().required('Required'),
  series: yup.string(),
  category: yup.string().required('Required'),
  product_type: yup.string().when('sku_type', {
    is: (val: string) => val && val !== Sku_Type_Enum.Card,
    then: yup.string().required('Required'),
  }),
  boxes_per_case: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only')
    .when('sku_type', (sku_type: string, schema: yup.AnySchema) =>
      sku_type === Sku_Type_Enum.Case ? schema.required('Required') : schema,
    ),
  packs_per_box: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only')
    .when('sku_type', (sku_type: string, schema: yup.AnySchema) =>
      sku_type === Sku_Type_Enum.Case || sku_type === Sku_Type_Enum.Box
        ? schema.required('Required')
        : schema,
    ),
  cards_per_pack: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only')
    .when('sku_type', (sku_type: string, schema: yup.AnySchema) =>
      sku_type === Sku_Type_Enum.Case ||
      sku_type === Sku_Type_Enum.Box ||
      sku_type === Sku_Type_Enum.Pack
        ? schema.required('Required')
        : schema,
    ),
  card_number: yup.string().when('sku_type', {
    is: Sku_Type_Enum.Card,
    then: yup.string().required('Required'),
  }),
  player: yup.string().when('sku_type', {
    is: Sku_Type_Enum.Card,
    then: yup.string().required('Required'),
  }),
  paralell: yup.string(),
  insert: yup.string(),
  rookie_card: yup.boolean(),
  memoribillia: yup.string(),
  autograph: yup.boolean(),
  numbered: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only'),
  grader: yup.string(),
  grade: yup
    .number()
    .max(10)
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only'),
});

type TFormData = {
  sku_id: string;
  sku_type: Sku_Type_Enum;
  location: string;
  year1: number;
  manufacturer: string;
  brand: string;
  series: string;
  category: string;
  product_type: string;
  boxes_per_case: number;
  packs_per_box: number;
  cards_per_pack: number;
  card_number: string;
  player: string;
  paralell: string;
  insert: string;
  rookie_card: boolean;
  memoribillia: string;
  autograph: boolean;
  numbered: number;
  grader: string;
  grade: number;
};

type TFormProps = {
  sku?: {
    id: string;
    sku_id: string;
    sku_type: string;
    location: string;
    year1: number;
    manufacturer: string;
    brand: string;
    series: string;
    category: string;
    product_type: string;
    boxes_per_case: number;
    packs_per_box: number;
    cards_per_pack: number;
    card_number: string;
    player: string;
    paralell: string;
    insert: string;
    rookie_card: boolean;
    memoribillia: string;
    autograph: boolean;
    numbered: number;
    grader: string;
    grade: number;
  };
  callback: () => void;
};

/**
 *
 * TODO: Add auth
 * TODO: Image upload
 * TODO: Generate description
 *
 */
const AddSKUForm: React.FC<TFormProps> = ({ sku, callback }) => {
  const [
    addSKU,
    {
      data: addSKUMutationData,
      loading: addSKUMutationLoading,
      error: addSKUMutationError,
    },
  ] = useInsertSkuMutation({ onCompleted: callback });

  const [
    updateSKU,
    {
      data: updateSKUMutationData,
      loading: updateSKUMutationLoading,
      error: updateSKUMutationError,
    },
  ] = useUpdateSkuMutation({ onCompleted: callback });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...(sku || {}),
      sku_type: SKUTypeValues.find((s) => s.value === sku?.sku_type)?.value,
    },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFormData) => {
    const operation = sku ? 'UPDATE' : 'ADD';

    const submitData = {
      image: '',
      description: '',
      ...result,
    };

    switch (operation) {
      case 'ADD':
        addSKU({
          variables: {
            data: submitData,
          },
        });
        break;
      case 'UPDATE':
        updateSKU({ variables: { id: sku?.id, data: submitData } });
        break;
    }
  };

  const watchSKUType = watch('sku_type');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={!!errors.sku_type}
          mb={5}
          width="50%"
          pr={gridSpace.child}
        >
          <FormLabel>SKU Type</FormLabel>
          <Select {...register('sku_type')}>
            <option value="">Select...</option>
            {SKUTypeValues.map((type) => (
              <option key={`option-${type.label}`} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.sku_type?.message}</FormErrorMessage>
        </FormControl>

        {watchSKUType && (
          <Flex mx={gridSpace.parent} mb={10}>
            <FormControl
              isInvalid={!!errors.sku_id}
              width="50%"
              px={gridSpace.child}
            >
              <FormLabel>SKU ID</FormLabel>
              <Input {...register('sku_id')} />
              <FormErrorMessage>{errors.sku_id?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!errors.location}
              width="50%"
              px={gridSpace.child}
            >
              <FormLabel>Location</FormLabel>
              <Input {...register('location')} />
              <FormErrorMessage>{errors.location?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
        )}

        {watchSKUType && (
          <Box mb={10}>
            <Heading size="md" as="h3" mb={5}>
              Details
            </Heading>

            <Flex mx={gridSpace.parent} mb={5}>
              <FormControl
                isInvalid={!!errors.year1}
                width="50%"
                px={gridSpace.child}
              >
                <FormLabel>Year</FormLabel>
                <Input {...register('year1')} />
                <FormErrorMessage>{errors.year1?.message}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!errors.category}
                width="50%"
                px={gridSpace.child}
              >
                <FormLabel>Sport/Category</FormLabel>
                <Input {...register('category')} />
                <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex mx={gridSpace.parent} mb={5}>
              <FormControl
                isInvalid={!!errors.manufacturer}
                width="50%"
                px={gridSpace.child}
              >
                <FormLabel>Manufacturer</FormLabel>
                <Input {...register('manufacturer')} />
                <FormErrorMessage>
                  {errors.manufacturer?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!errors.brand}
                width="50%"
                px={gridSpace.child}
              >
                <FormLabel>Brand</FormLabel>
                <Input {...register('brand')} />
                <FormErrorMessage>{errors.brand?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex mx={gridSpace.parent} mb={5}>
              <FormControl
                isInvalid={!!errors.series}
                width="50%"
                px={gridSpace.child}
              >
                <FormLabel>Series</FormLabel>
                <Input {...register('series')} />
                <FormErrorMessage>{errors.series?.message}</FormErrorMessage>
              </FormControl>

              {watchSKUType !== Sku_Type_Enum.Card && (
                <FormControl
                  isInvalid={!!errors.product_type}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>Product Type</FormLabel>
                  <Input {...register('product_type')} />
                  <FormErrorMessage>
                    {errors.product_type?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Flex>

            {watchSKUType !== Sku_Type_Enum.Card && (
              <Flex mx={gridSpace.parent} mb={5}>
                {watchSKUType === Sku_Type_Enum.Case && (
                  <FormControl
                    isInvalid={!!errors.boxes_per_case}
                    width={1 / 3}
                    px={gridSpace.child}
                  >
                    <FormLabel>Boxes per Case</FormLabel>
                    <Input {...register('boxes_per_case')} />
                    <FormErrorMessage>
                      {errors.boxes_per_case?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}

                {(watchSKUType === Sku_Type_Enum.Case ||
                  watchSKUType === Sku_Type_Enum.Box) && (
                  <FormControl
                    isInvalid={!!errors.packs_per_box}
                    width={1 / 3}
                    px={gridSpace.child}
                  >
                    <FormLabel>Packs per Box</FormLabel>
                    <Input {...register('packs_per_box')} />
                    <FormErrorMessage>
                      {errors.packs_per_box?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}

                <FormControl
                  isInvalid={!!errors.cards_per_pack}
                  width={1 / 3}
                  px={gridSpace.child}
                >
                  <FormLabel>Cards per Pack</FormLabel>
                  <Input {...register('cards_per_pack')} />
                  <FormErrorMessage>
                    {errors.cards_per_pack?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
            )}

            {watchSKUType === Sku_Type_Enum.Card && (
              <>
                <Flex mx={gridSpace.parent} mb={5}>
                  <FormControl
                    isInvalid={!!errors.card_number}
                    width="50%"
                    px={gridSpace.child}
                  >
                    <FormLabel>Card Number</FormLabel>
                    <Input {...register('card_number')} />
                    <FormErrorMessage>
                      {errors.card_number?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.player}
                    width="50%"
                    px={gridSpace.child}
                  >
                    <FormLabel>Player</FormLabel>
                    <Input {...register('player')} />
                    <FormErrorMessage>
                      {errors.player?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <Flex mx={gridSpace.parent} mb={7}>
                  <FormControl
                    isInvalid={!!errors.paralell}
                    width="50%"
                    px={gridSpace.child}
                  >
                    <FormLabel>Parallel</FormLabel>
                    <Input {...register('paralell')} />
                    <FormErrorMessage>
                      {errors.paralell?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.insert}
                    width="50%"
                    px={gridSpace.child}
                  >
                    <FormLabel>Insert</FormLabel>
                    <Input {...register('insert')} />
                    <FormErrorMessage>
                      {errors.insert?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <Flex mx={gridSpace.parent} mb={5}>
                  <HStack width="50%" px={gridSpace.child} mt={8} spacing={8}>
                    <Checkbox
                      size="lg"
                      borderColor="gray.300"
                      {...register('rookie_card')}
                    >
                      Rookie
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      borderColor="gray.300"
                      {...register('autograph')}
                    >
                      Autograph
                    </Checkbox>
                  </HStack>

                  <FormControl
                    isInvalid={!!errors.memoribillia}
                    width="50%"
                    px={gridSpace.child}
                  >
                    <FormLabel>Memoribillia</FormLabel>
                    <Input {...register('memoribillia')} />
                    <FormErrorMessage>
                      {errors.memoribillia?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <Flex mx={gridSpace.parent} mb={5}>
                  <FormControl
                    isInvalid={!!errors.numbered}
                    width={1 / 3}
                    px={gridSpace.child}
                  >
                    <FormLabel>Numbered</FormLabel>
                    <Input {...register('numbered')} />
                    <FormErrorMessage>
                      {errors.numbered?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.grader}
                    width={1 / 3}
                    px={gridSpace.child}
                  >
                    <FormLabel>Grader</FormLabel>
                    <Input {...register('grader')} />
                    <FormErrorMessage>
                      {errors.grader?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.grade}
                    width={1 / 3}
                    px={gridSpace.child}
                  >
                    <FormLabel>Grade</FormLabel>
                    <Input {...register('grade')} />
                    <FormErrorMessage>{errors.grade?.message}</FormErrorMessage>
                  </FormControl>
                </Flex>
              </>
            )}
          </Box>
        )}

        <Flex justifyContent="center">
          <Button mb={4} px={10} colorScheme="blue" type="submit">
            Add SKU
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default AddSKUForm;
