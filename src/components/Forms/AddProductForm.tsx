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
  useInsertProductMutation,
  useUpdateProductMutation,
  Unit_Of_Measure_Enum,
} from '@generated/graphql';
import { UnitOfMeasureValues } from '@config/values';
import { gridSpace } from '@config/chakra/constants';

const schema = yup.object().shape({
  unit_of_measure: yup.string().required('Required'),
  year: yup
    .string()
    .required('Required')
    .matches(/^\d{4}(?:-\d{2}){0,1}$/, 'Enter a valid year or year range'),
  manufacturer: yup.string().required('Required'),
  brand: yup.string().required('Required'),
  series: yup.string().nullable(),
  category: yup.string().required('Required'),
  type: yup
    .string()
    .when('unit_of_measure', {
      is: (val: string) => val && val !== Unit_Of_Measure_Enum.Card,
      then: yup.string().required('Required'),
    })
    .nullable(),
  boxes_per_case: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only')
    .when('unit_of_measure', (unit_of_measure: string, schema: yup.AnySchema) =>
      unit_of_measure === Unit_Of_Measure_Enum.Case
        ? schema.required('Required')
        : schema,
    ),
  packs_per_box: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only')
    .when('unit_of_measure', (unit_of_measure: string, schema: yup.AnySchema) =>
      unit_of_measure === Unit_Of_Measure_Enum.Case ||
      unit_of_measure === Unit_Of_Measure_Enum.Box
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
    .when('unit_of_measure', (unit_of_measure: string, schema: yup.AnySchema) =>
      unit_of_measure === Unit_Of_Measure_Enum.Case ||
      unit_of_measure === Unit_Of_Measure_Enum.Box ||
      unit_of_measure === Unit_Of_Measure_Enum.Pack
        ? schema.required('Required')
        : schema,
    ),
  card_number: yup
    .string()
    .when('unit_of_measure', {
      is: Unit_Of_Measure_Enum.Card,
      then: yup.string().required('Required'),
    })
    .nullable(),
  player: yup
    .string()
    .when('unit_of_measure', {
      is: Unit_Of_Measure_Enum.Card,
      then: yup.string().required('Required'),
    })
    .nullable(),
  paralell: yup.string().nullable(),
  insert: yup.string().nullable(),
  rookie_card: yup.boolean(),
  memoribillia: yup.string().nullable(),
  autograph: yup.boolean(),
  numbered: yup
    .number()
    .integer()
    .transform((c, o) => {
      return o === '' ? null : c;
    })
    .nullable()
    .typeError('Numbers only'),
  grader: yup.string().nullable(),
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
  unit_of_measure: Unit_Of_Measure_Enum;
  year: string;
  manufacturer: string;
  brand: string;
  series: string | null;
  category: string;
  type: string | null;
  boxes_per_case: number | null;
  packs_per_box: number | null;
  cards_per_pack: number | null;
  card_number: string | null;
  player: string | null;
  paralell: string | null;
  insert: string | null;
  rookie_card: boolean | null;
  memoribillia: string | null;
  autograph: boolean | null;
  numbered: number | null;
  grader: string | null;
  grade: number | null;
};

type TFormProps = {
  product?: {
    id: string;
    unit_of_measure: string;
    year: string;
    manufacturer: string;
    brand: string;
    series?: string | null;
    category: string;
    type?: string | null;
    boxes_per_case?: number | null;
    packs_per_box?: number | null;
    cards_per_pack?: number | null;
    card_number?: string | null;
    player?: string | null;
    paralell?: string | null;
    insert?: string | null;
    rookie_card?: boolean | null;
    memoribillia?: string | null;
    autograph?: boolean | null;
    numbered?: number | null;
    grader?: string | null;
    grade?: number | null;
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
const AddProductForm: React.FC<TFormProps> = ({ product, callback }) => {
  const operation = product ? 'UPDATE' : 'ADD';

  const [
    addProduct,
    {
      data: addProductMutationData,
      loading: addProductMutationLoading,
      error: addProductMutationError,
    },
  ] = useInsertProductMutation({ onCompleted: callback });

  const [
    updateProduct,
    {
      data: updateProductMutationData,
      loading: updateProductMutationLoading,
      error: updateProductMutationError,
    },
  ] = useUpdateProductMutation({ onCompleted: callback });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...(product || {}),
      unit_of_measure: UnitOfMeasureValues.find(
        (s) => s.value === product?.unit_of_measure,
      )?.value,
    },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFormData) => {
    const submitData = {
      image: '',
      ...result,
    };

    switch (operation) {
      case 'ADD':
        addProduct({
          variables: {
            data: submitData,
          },
        });
        break;
      case 'UPDATE':
        updateProduct({ variables: { id: product?.id, data: submitData } });
        break;
    }
  };

  const watchUnitOfMeasureType = watch('unit_of_measure');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={!!errors.unit_of_measure}
          mb={5}
          width="50%"
          pr={gridSpace.child}
        >
          <FormLabel>Unit of Measure</FormLabel>
          <Select {...register('unit_of_measure')}>
            <option value="">Select...</option>
            {UnitOfMeasureValues.map((type) => (
              <option key={`option-${type.label}`} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.unit_of_measure?.message}</FormErrorMessage>
        </FormControl>

        {watchUnitOfMeasureType && (
          <Box mb={10}>
            <Heading size="md" as="h3" mb={5}>
              Details
            </Heading>

            <Flex mx={gridSpace.parent} mb={5}>
              <FormControl
                isInvalid={!!errors.year}
                width="50%"
                px={gridSpace.child}
              >
                <FormLabel>Year</FormLabel>
                <Input {...register('year')} />
                <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
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

              {watchUnitOfMeasureType !== Unit_Of_Measure_Enum.Card && (
                <FormControl
                  isInvalid={!!errors.type}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>Type</FormLabel>
                  <Input {...register('type')} />
                  <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
                </FormControl>
              )}
            </Flex>

            {watchUnitOfMeasureType !== Unit_Of_Measure_Enum.Card && (
              <Flex mx={gridSpace.parent} mb={5}>
                {watchUnitOfMeasureType === Unit_Of_Measure_Enum.Case && (
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

                {(watchUnitOfMeasureType === Unit_Of_Measure_Enum.Case ||
                  watchUnitOfMeasureType === Unit_Of_Measure_Enum.Box) && (
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

            {watchUnitOfMeasureType === Unit_Of_Measure_Enum.Card && (
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
            {operation === 'UPDATE' ? 'Update Product' : 'Add Product'}
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default AddProductForm;
