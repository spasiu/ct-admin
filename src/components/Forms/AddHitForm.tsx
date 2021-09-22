import React, { useState, useEffect } from 'react';
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
  Text,
  Checkbox,
  Box,
  HStack,
} from '@chakra-ui/react';

import {
  useInsertHitMutation,
  useUpdateHitMutation,
  useGetFilteredExtensibleValuesQuery,
  useGetBreakOrderUsersLazyQuery,
} from '@generated/graphql';

import { gridSpace } from '@config/chakra/constants';

import Autocomplete from '@components/Autocomplete';
import AutocompleteBreaks from '@components/AutocompleteBreaks';
import ImageUploader from '@components/ImageUploader';

import {
  TAddHitUser,
  TAddHitFormData,
  TAddHitFormProps,
} from '@customTypes/hits';

const schema = yup.object().shape({
  user_id: yup.string().required('Required'),
  break_id: yup.string().required('Required'),
  image_front: yup.string().required('Image is Required'),
  image_back: yup.string().nullable(),
  year: yup
    .string()
    .required('Required')
    .matches(
      /^\d{4}(?:-(\d{2}|\d{4})){0,1}$/,
      'Enter a valid year or year range',
    ),
  category: yup.string().required('Required'),
  manufacturer: yup.string().required('Required'),
  brand: yup.string().required('Required'),
  series: yup.string().nullable(),
  card_number: yup.string().required('Required'),
  player: yup.string().required('Required'),
  parallel: yup.string().nullable(),
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
});

/**
 * TODO: Add auth
 */
const AddHitForm: React.FC<TAddHitFormProps> = ({ hit, callback }) => {
  const operation = hit ? 'UPDATE' : 'ADD';
  const [userOptions, setUserOptions] = useState<TAddHitUser[]>(
    hit && hit.User.username
      ? [{ id: hit.user_id, username: hit.User.username }]
      : [],
  );

  // Remove id, Break and User objects from hit input when editing
  const { id: hitId, User, Break, ...defaultValues } = hit || {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TAddHitFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    loading: extensibleValueQueryLoading,
    error: extensibleValueQueryError,
    data: extensibleValueQueryData,
  } = useGetFilteredExtensibleValuesQuery({
    variables: {
      fields: [
        'product_brand',
        'product_category',
        'product_insert',
        'product_manufacturer',
        'product_memoribillia',
        'product_parallel',
        'product_series',
        'product_year',
      ],
    },
    onCompleted: () => {
      reset({
        ...(defaultValues || {}),
      });
    },
  });

  const [
    insertHit,
    {
      data: insertHitMutationData,
      loading: insertHitMutationLoading,
      error: insertHitMutationError,
    },
  ] = useInsertHitMutation({ onCompleted: callback });

  const [
    updateHit,
    {
      data: updateHitMutationData,
      loading: updateHitMutationLoading,
      error: updateHitMutationError,
    },
  ] = useUpdateHitMutation({ onCompleted: callback });

  const [
    getBreakUsers,
    { loading: breakUserLoading, data: breakUserData },
  ] = useGetBreakOrderUsersLazyQuery();

  useEffect(() => {
    if (breakUserData) {
      let options: TAddHitUser[] = [];

      breakUserData?.Breaks_by_pk?.BreakProductItems.forEach((prodItem) => {
        if (prodItem.Order) {
          options.push({
            id: prodItem.Order.User.id,
            username: prodItem.Order.User.username,
          });
        }
      });

      // Remove duplicate users (in case they bought multiple spots in break)
      options = options.filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
      );

      setUserOptions(options);
    }
  }, [breakUserData]);

  const watchBreak = watch('break_id');

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TAddHitFormData) => {
    switch (operation) {
      case 'ADD':
        insertHit({ variables: { data: result } });
        break;
      case 'UPDATE':
        updateHit({ variables: { id: hit?.id, data: result } });
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.break_id} mb={5}>
          <FormLabel>Break</FormLabel>
          <AutocompleteBreaks
            isInvalid={!!errors.break_id}
            defaultValue={hit?.Break.title}
            callback={(val: string) => {
              setValue('break_id', val);
              getBreakUsers({ variables: { id: val } });
            }}
          />
          <FormErrorMessage>{errors.break_id?.message}</FormErrorMessage>
        </FormControl>

        {watchBreak && (
          <>
            <HStack
              justifyContent="center"
              alignItems="flex-start"
              spacing={8}
              mb={8}
            >
              <Box>
                <ImageUploader
                  label="Front Image"
                  imagePath={hit?.image_front}
                  imageFolder="hits"
                  callback={(url: string) => {
                    setValue('image_front', url);
                  }}
                />

                {errors.image_front && (
                  <Text textAlign="center" color="red" fontSize="xs" mt={3}>
                    {errors.image_front?.message}
                  </Text>
                )}
              </Box>

              <Box>
                <ImageUploader
                  label="Back Image"
                  imagePath={hit?.image_back}
                  imageFolder="hits"
                  callback={(url: string) => {
                    setValue('image_back', url);
                  }}
                />

                {errors.image_back && (
                  <Text textAlign="center" color="red" fontSize="xs" mt={3}>
                    {errors.image_back?.message}
                  </Text>
                )}
              </Box>
            </HStack>

            <FormControl isInvalid={!!errors.user_id} mb={8}>
              <FormLabel>User</FormLabel>
              <Select {...register('user_id')}>
                <option value="">Select...</option>
                {userOptions.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.username}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{errors.user_id?.message}</FormErrorMessage>
            </FormControl>

            <Box mb={10}>
              <Flex mx={gridSpace.parent} mb={5}>
                <FormControl
                  isInvalid={!!errors.year}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>Year</FormLabel>
                  <Select {...register('year')}>
                    <option value="">Select...</option>
                    {extensibleValueQueryData?.ExtensibleValues.filter(
                      (o) => o.field === 'product_year',
                    )
                      .reverse()
                      .map((val) => (
                        <option
                          key={`option-${val.field}-${val.value}`}
                          value={val.value}
                        >
                          {val.value}
                        </option>
                      ))}
                  </Select>
                  <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={!!errors.category}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>Sport/Category</FormLabel>
                  <Select {...register('category')}>
                    <option value="">Select...</option>
                    {extensibleValueQueryData?.ExtensibleValues.filter(
                      (o) => o.field === 'product_category',
                    ).map((val) => (
                      <option
                        key={`option-${val.field}-${val.value}`}
                        value={val.value}
                      >
                        {val.value}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.category?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex mx={gridSpace.parent} mb={5}>
                <FormControl
                  isInvalid={!!errors.manufacturer}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>Manufacturer</FormLabel>
                  <Select {...register('manufacturer')}>
                    <option value="">Select...</option>
                    {extensibleValueQueryData?.ExtensibleValues.filter(
                      (o) => o.field === 'product_manufacturer',
                    ).map((val) => (
                      <option
                        key={`option-${val.field}-${val.value}`}
                        value={val.value}
                      >
                        {val.value}
                      </option>
                    ))}
                  </Select>
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
                  <Select {...register('brand')}>
                    <option value="">Select...</option>
                    {extensibleValueQueryData?.ExtensibleValues.filter(
                      (o) => o.field === 'product_brand',
                    ).map((val) => (
                      <option
                        key={`option-${val.field}-${val.value}`}
                        value={val.value}
                      >
                        {val.value}
                      </option>
                    ))}
                  </Select>
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
                  <Select {...register('series')}>
                    <option value="">Select...</option>
                    {extensibleValueQueryData?.ExtensibleValues.filter(
                      (o) => o.field === 'product_series',
                    ).map((val) => (
                      <option
                        key={`option-${val.field}-${val.value}`}
                        value={val.value}
                      >
                        {val.value}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.series?.message}</FormErrorMessage>
                </FormControl>
              </Flex>

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
                  <FormErrorMessage>{errors.player?.message}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex mx={gridSpace.parent} mb={7}>
                <FormControl
                  isInvalid={!!errors.parallel}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>Parallel</FormLabel>
                  <Select {...register('parallel')}>
                    <option value="">Select...</option>
                    {extensibleValueQueryData?.ExtensibleValues.filter(
                      (o) => o.field === 'product_parallel',
                    ).map((val) => (
                      <option
                        key={`option-${val.field}-${val.value}`}
                        value={val.value}
                      >
                        {val.value}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.parallel?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={!!errors.insert}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>Insert</FormLabel>
                  <Autocomplete
                    isInvalid={!!errors.insert}
                    defaultValue={hit?.insert}
                    callback={(val: string) => {
                      setValue('insert', val);
                    }}
                    field="product_insert"
                  />
                  <FormErrorMessage>{errors.insert?.message}</FormErrorMessage>
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
                  <Select {...register('memoribillia')}>
                    <option value="">Select...</option>
                    {extensibleValueQueryData?.ExtensibleValues.filter(
                      (o) => o.field === 'product_memoribillia',
                    ).map((val) => (
                      <option
                        key={`option-${val.field}-${val.value}`}
                        value={val.value}
                      >
                        {val.value}
                      </option>
                    ))}
                  </Select>
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
              </Flex>
            </Box>

            <Flex justifyContent="center">
              <Button mb={4} px={10} colorScheme="blue" type="submit">
                {operation === 'UPDATE' ? 'Update Hit' : 'Add Hit'}
              </Button>
            </Flex>
          </>
        )}
      </form>
    </>
  );
};

export default AddHitForm;
