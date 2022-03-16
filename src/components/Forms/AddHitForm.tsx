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
  useGetBreakDataLazyQuery,
} from '@generated/graphql';

import { gridSpace } from '@config/chakra/constants';

import Autocomplete from '@components/Autocomplete';
import AutocompleteBreaks from '@components/AutocompleteBreaks';
import ImageUploader from '@components/ImageUploader';

import {
  TAddHitFormData,
  TAddHitFormProps,
  TAddHitPreviewData,
  TAddHitProduct,
  TAddHitUser,
} from '@customTypes/hits';
import { functions } from '@config/firebase';
import FormModal from '@components/Modals/FormModal';
import Imgix from 'react-imgix';

const schema = yup.object().shape({
  user_id: yup.string().required('Required'),
  break_id: yup.string().required('Required'),
  product_id: yup.string().required('Required'),
  image_front: yup.string().required('Image is Required'),
  image_back: yup.string().nullable(),
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
  published: yup.boolean(),
});

/**
 * TODO: Add auth
 */
const AddHitForm: React.FC<TAddHitFormProps> = ({ hit, callback, refetch }) => {
  const isUpdate = hit !== undefined;
  const [breakId, setBreakId] = useState<string | null>(
    hit && hit.break_id ? hit.break_id : null,
  );

  const user = hit?.User;
  const [productOptions, setProductOptions] = useState<TAddHitProduct[]>([]);
  const [resultMap, setResultMap] = useState<Map<string, TAddHitUser>>();

  const [isPreviewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [previewData, setPreviewData] = useState<TAddHitPreviewData | null>(
    null,
  );
  const [finished, setFinished] = useState(true);
  const [imageFront, setImageFront] = useState<string | undefined>(hit?.image_front);
  const [imageBack, setImageBack] = useState<string | undefined>(hit?.image_back);

  // Remove id, Break, User and Product objects from hit input when editing
  const { id: hitId, User, Break, Product, ...defaultValues } = hit || {};

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
    setValue,
    getValues,
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
      fields: ['product_insert', 'product_memoribillia', 'product_parallel'],
    },
    onCompleted: () => {
      reset({
        ...(defaultValues || {}),
      });
    },
  });

  const sendHitNotification = functions.httpsCallable('sendHitNotification');

  const [
    insertHit,
    {
      data: insertHitMutationData,
      loading: insertHitMutationLoading,
      error: insertHitMutationError,
    },
  ] = useInsertHitMutation({
    onCompleted: () => {
      if (finished) {
        callback();
      } else {
        reset({});
        setValue('break_id', breakId || '');
        refetch();
        setImageBack(undefined);
        setImageFront(undefined);
      }
    },
  });

  const [
    updateHit,
    {
      data: updateHitMutationData,
      loading: updateHitMutationLoading,
      error: updateHitMutationError,
    },
  ] = useUpdateHitMutation({ onCompleted: callback });

  const [
    getBreakData,
    { loading: breakDataLoading, data: breakData },
  ] = useGetBreakDataLazyQuery();

  useEffect(() => {
    if (breakId) {
      setValue('break_id', breakId);
      getBreakData({ variables: { id: breakId } });
    }
  }, [breakId]);

  useEffect(() => {
    if (breakData && breakData.Breaks_by_pk) {
      const products = breakData.Breaks_by_pk.Inventory.filter(
        (inv) => inv.Product,
      ).map((inv) => inv.Product!);

      if (products.length > 0) {
        setProductOptions(products);
        if (hit && hit.product_id) setValue('product_id', hit.product_id);
      } else
        setError('product_id', {
          type: 'manual',
          message: 'We have no products for this break',
        });

      if (!breakData.Breaks_by_pk.result) {
        setError('break_id', {
          type: 'manual',
          message: 'We have no randomization results for this break',
        });
      } else if (
        breakData.Breaks_by_pk.break_type === 'PERSONAL' ||
        breakData.Breaks_by_pk.break_type === 'HIT_DRAFT'
      ) {
        const rMap = new Map<string, TAddHitUser>();
        breakData.Breaks_by_pk.result.forEach((r: any) => {
          rMap.set(r.username, { username: r.username, id: r.user_id });
        });
        setResultMap(rMap);
      } else {
        const rMap = new Map<string, TAddHitUser>();
        breakData.Breaks_by_pk.result.forEach((r: any) => {
          r.items.forEach((i: any) => {
            rMap.set(i.name, { username: r.username, id: r.user_id });
          });
        });
        setResultMap(rMap);
      }
    }
  }, [breakData]);

  const populateUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const user = resultMap?.get(event.target.value);
    if (user) {
      setValue('user_id', user.id);
      setValue('username', user.username!);
    } else {
      setError('username', {
        type: 'manual',
        message: `We have no user registered with this ${breakData?.Breaks_by_pk?.break_type}`,
      });
    }
  };

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TAddHitFormData) => {
    delete result.username;
    if (isUpdate) {
      updateHit({ variables: { id: hit?.id, data: result } });
      // only send a notification if this is the first publication
      if (!hit?.published && result.published) {
        sendHitNotification({
          userId: result.user_id,
          playerName: result.player,
        });
      }
    } else {
      insertHit({ variables: { data: result } });
    }
  };

  const prepPreview = () => {
    const formData = getValues();
    const product = productOptions.filter(p => p.id === formData.product_id)[0];
    setPreviewData({ Product: product, ...formData });
    setPreviewModalOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.break_id} mb={5}>
          <FormLabel>Break</FormLabel>
          <AutocompleteBreaks
            isInvalid={!!errors.break_id}
            defaultValue={hit?.Break.title}
            callback={(val: string) => setBreakId(val)}
          />
          <FormErrorMessage>{errors.break_id?.message}</FormErrorMessage>
        </FormControl>

        {breakId && (
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
                  imagePath={imageFront}
                  imageFolder="hits"
                  imageWidth={250}
                  imageHeight={350}
                  imageFit="clip"
                  callback={(url: string) => {
                    setValue('image_front', url);
                    setImageFront(url);
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
                  imagePath={imageBack}
                  imageFolder="hits"
                  imageWidth={250}
                  imageHeight={350}
                  imageFit="clip"
                  callback={(url: string) => {
                    setValue('image_back', url);
                    setImageBack(url);
                  }}
                />

                {errors.image_back && (
                  <Text textAlign="center" color="red" fontSize="xs" mt={3}>
                    {errors.image_back?.message}
                  </Text>
                )}
              </Box>
            </HStack>

            <FormControl mb={8} isInvalid={!!errors.product_id}>
              <FormLabel>Product</FormLabel>
              <Select {...register('product_id')}>
                <option value="">Select...</option>
                {productOptions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.description}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{errors.product_id?.message}</FormErrorMessage>
            </FormControl>

            <Box mb={10}>
              <Flex mx={gridSpace.parent} mb={5}>
                <FormControl width="50%" px={gridSpace.child}>
                  <FormLabel>{breakData?.Breaks_by_pk?.break_type}</FormLabel>
                  <Select onChange={populateUser}>
                    <option value="">Select...</option>
                    {resultMap &&
                      Array.from(resultMap!.keys()).map((k) => (
                        <option value={k}>{k}</option>
                      ))}
                  </Select>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.user_id}
                  width="50%"
                  px={gridSpace.child}
                >
                  <FormLabel>User*</FormLabel>
                  <Input
                    {...register('user_id')}
                    value={user ? user.id! : ''}
                    hidden
                  />
                  <Input
                    {...register('username')}
                    value={user ? user.username! : ''}
                    disabled
                  />
                  <span style={{ fontSize: 10 }}>
                    * Derrived from{' '}
                    {breakData?.Breaks_by_pk?.break_type?.toLowerCase()}{' '}
                    selection
                  </span>
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

            <Checkbox {...register('published')} hidden />

            <Flex justifyContent="center">
              <Button mb={4} mr={4} colorScheme="green" onClick={prepPreview}>
                Preview
              </Button>
              <Button
                mb={4}
                mr={4}
                colorScheme="blue"
                onClick={() => setFinished(true)}
                type="submit">
                {isUpdate ? 'Update Hit' : 'Add Draft and finish'}
              </Button>
              {!isUpdate ?
                <Button
                  mb={4}
                  mr={4}
                  colorScheme="blue"
                  onClick={() => setFinished(false)}
                  type="submit" >
                  Add Draft and continue
                </Button> : null}
              {isUpdate && !hit?.published ? (
                <Button
                  mb={4}
                  colorScheme="red"
                  onClick={() => { setValue('published', true) }}
                  type="submit"
                >
                  Publish
                </Button>
              ) : (
                <Button
                  mb={4}
                  colorScheme="red"
                  onClick={() => { setValue('published', false) }}
                  type="submit"
                >
                  Unpublish
                </Button>
              )}
            </Flex>
          </>
        )}
      </form>

      <FormModal
        title="Preview"
        size="xl"
        isOpen={isPreviewModalOpen}
        setModalOpen={setPreviewModalOpen}
        closeOnEsc={true}
      >
        <Flex
          justifyContent="center"
          direction={'column'}
          alignItems={'center'}
        >
          <Imgix
            src={`${process.env.NEXT_PUBLIC_IMG_URL}/${previewData?.image_front}`}
            width={285}
            height={285}
          />
          <Text width={285}>
            {[
              previewData?.Product?.year,
              previewData?.Product?.manufacturer,
              previewData?.Product?.brand,
              previewData?.Product?.series,
              previewData?.card_number,
              previewData?.player,
              previewData?.parallel,
              previewData?.insert,
              previewData?.autograph ? 'Autograph' : '',
              previewData?.memoribillia ? previewData.memoribillia : '',
              previewData?.rookie_card ? 'Rookie' : '',
              previewData?.numbered ? '/' + previewData.numbered : '',
            ].join(' ')}
          </Text>
        </Flex>
      </FormModal>
    </>
  );
};

export default AddHitForm;
