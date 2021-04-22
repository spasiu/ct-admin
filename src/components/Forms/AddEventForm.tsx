import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdCameraAlt } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { gql, useMutation } from '@apollo/client';
import { useAuthState } from 'react-firebase-hooks/auth';
import format from 'date-fns/format';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Icon,
  Textarea,
} from '@chakra-ui/react';

import { auth } from '@config/firebase';
import DatePickerDisplay from '@components/DatePickerDisplay';
import {
  InsertEventMutation,
  InsertEventMutationVariables,
} from '@generated/graphql';

const INSERT_EVENT = gql`
  mutation InsertEvent($data: Events_insert_input!) {
    insert_Events_one(object: $data) {
      id
    }
  }
`;

const schema = yup.object().shape({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
  start_time: yup
    .date()
    .min(new Date(), 'The start time must be after the current time')
    .required(),
});

type TFormData = {
  title: string;
  description: string;
  start_time: Date;
};

type TFormProps = {
  callback: () => void;
};

/**
 *
 * TODO: Handle errors
 *
 */
const AddEventForm: React.FC<TFormProps> = ({ callback }) => {
  const [user] = useAuthState(auth);

  const [
    addEvent,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation<InsertEventMutation, InsertEventMutationVariables>(
    INSERT_EVENT,
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    mutationData && callback && callback();
  }, [mutationData]);

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFormData) => {
    if (user) {
      addEvent({
        variables: {
          data: {
            user_id: user.uid,
            title: result.title,
            description: result.description,
            image: '',
            start_time: format(result.start_time, "yyyy-MM-dd'T'HH:mm:ssxxx"),
          },
        },
      });
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Flex
        bg="background"
        justifyContent="center"
        alignItems="center"
        mx="auto"
        mb={5}
        sx={{
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        <Icon as={MdCameraAlt} w={8} h={8} />
      </Flex>
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

      <FormControl isInvalid={!!errors.start_time} mb={10}>
        <FormLabel>Start Time</FormLabel>
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
        <FormErrorMessage>{errors.start_time?.message}</FormErrorMessage>
      </FormControl>

      <Flex justifyContent="center">
        <Button mb={4} px={10} colorScheme="blue" type="submit">
          Add Event
        </Button>
      </Flex>
    </form>
  );
};

export default AddEventForm;
