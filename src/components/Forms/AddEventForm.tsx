import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { useAuthState } from 'react-firebase-hooks/auth';
import format from 'date-fns/format';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Textarea,
  Text,
  Checkbox,
} from '@chakra-ui/react';

import {
  useInsertEventMutation,
  useUpdateEventMutation,
} from '@generated/graphql';

import { auth } from '@config/firebase';

import DatePickerDisplay from '@components/DatePickerDisplay';
import ImageUploader from '@components/ImageUploader';

import { TAddEventFormData, TAddEventFormProps } from '@customTypes/events';

const schema = yup.object().shape({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
  image: yup.string().required('Image is Required'),
  disable_date: yup.boolean(),
  start_time: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .min(new Date(), 'The start time must be after the current time'),
});

/**
 *
 * TODO: Handle errors
 * TODO: Add ability to assign event
 *
 */
const AddEventForm: React.FC<TAddEventFormProps> = ({ event, callback }) => {
  const [user] = useAuthState(auth);
  const operation = event?.id ? 'UPDATE' : 'ADD';

  const [
    insertEvent,
    {
      data: insertMutationData,
      loading: insertMutationLoading,
      error: insertMutationError,
    },
  ] = useInsertEventMutation({ onCompleted: callback });

  const [
    updateEvent,
    {
      data: updateMutationData,
      loading: updateMutationLoading,
      error: updateMutationError,
    },
  ] = useUpdateEventMutation({ onCompleted: callback });

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TAddEventFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...(event || {}),
      start_time: event
        ? event?.start_time !== null
          ? new Date(event?.start_time)
          : null
        : undefined,
    },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TAddEventFormData) => {
    if (user) {
      const submitData = {
        title: result.title,
        description: result.description,
        image: result.image,
        start_time: result.start_time
          ? format(result.start_time, "yyyy-MM-dd'T'HH:mm:ssxxx")
          : null,
      };

      switch (operation) {
        case 'ADD':
          insertEvent({
            variables: {
              data: { user_id: user.uid, ...submitData },
            },
          });
          break;
        case 'UPDATE':
          updateEvent({
            variables: {
              id: event?.id,
              data: submitData,
            },
          });
          break;
      }
    }
  };

  // Watch for start time to show/hide clear date button
  const watchStartTime = watch('start_time');

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box mb={5}>
        <ImageUploader
          imagePath={event?.image}
          imageFolder="events"
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

      <FormControl isInvalid={!!errors.start_time} mb={5}>
        <FormLabel>Start Time</FormLabel>
        <Flex alignItems="center">
          <Controller
            name="start_time"
            defaultValue={new Date()}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                selected={value}
                showTimeSelect={true}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeIntervals={15}
                onChange={onChange}
                onBlur={onBlur}
                customInput={<DatePickerDisplay />}
              />
            )}
          />
          {watchStartTime && (
            <Button
              colorScheme="red"
              size="xs"
              ml={5}
              onClick={() => {
                setValue('start_time', null);
              }}
            >
              Remove Date
            </Button>
          )}
        </Flex>
        <FormErrorMessage>{errors.start_time?.message}</FormErrorMessage>
      </FormControl>

      <Flex justifyContent="center">
        <Button mb={4} px={10} colorScheme="blue" type="submit">
          {operation === 'UPDATE' ? 'Update Event' : 'Add Event'}
        </Button>
      </Flex>
    </form>
  );
};

export default AddEventForm;
