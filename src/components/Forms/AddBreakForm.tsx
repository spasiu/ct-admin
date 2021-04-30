import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  Break_Type_Enum,
  useInsertBreakMutation,
  useUpdateBreakMutation,
} from '@generated/graphql';

import { auth } from '@config/firebase';
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
} from '@chakra-ui/react';

import ImageUploader from '@components/ImageUploader';

const schema = yup.object().shape({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
  event_id: yup.string().required('Required'),
  break_type: yup.string().required('Required'),
  spots: yup
    .number()
    .typeError('Must be a number')
    .integer('Must be an whole number')
    .min(1, 'Must be greater than 0')
    .required('Required'),
  teams_per_spot: yup
    .number()
    .typeError('Must be a number')
    .integer('Must be an whole number')
    .min(1, 'Must be greater than 0')
    .required('Required'),
  price: yup
    .number()
    .typeError('Must be a number')
    .test('is-currency', 'Must be a valid price', (value) => {
      const currRegex = /^[1-9]\d*(\.\d{1,2})?$/;

      return value ? currRegex.test(String(value)) : false;
    })
    .min(0, 'Must be greater than 0')
    .required('Required'),
});

type TFormData = {
  id?: string;
  title: string;
  description: string;
  event_id: string;
  image: string;
  break_type: Break_Type_Enum;
  spots: number;
  teams_per_spot: number;
  price: number;
};

type TFormProps = {
  event_id?: string;
  break_data?: {
    id?: string;
    title: string;
    description: string;
    image: string;
    break_type: string;
    spots: number;
    teams_per_spot: number;
    price: string;
  };
  callback: () => void;
};

/**
 *
 * TODO: Handle errors
 * TODO: Add image handling
 * TODO: Add event autocomplete/dropdown
 */
const AddBreakForm: React.FC<TFormProps> = ({
  event_id,
  break_data,
  callback,
}) => {
  const [user] = useAuthState(auth);
  const operation = break_data ? 'UPDATE' : 'ADD';

  const [
    addBreak,
    {
      data: addBreakMutationData,
      loading: addBreakMutationLoading,
      error: addBreakMutationError,
    },
  ] = useInsertBreakMutation({ onCompleted: callback });

  const [
    updateBreak,
    {
      data: updateBreakMutationData,
      loading: updateBreakMutationLoading,
      error: updateBreakMutationError,
    },
  ] = useUpdateBreakMutation({ onCompleted: callback });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      event_id: event_id,
      ...(break_data || {}),
      price: break_data
        ? Number(break_data.price.replace(/[^0-9.-]+/g, ''))
        : undefined,
      break_type: BreakTypeValues.find(
        (b) => b.value === break_data?.break_type,
      )?.value,
    },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFormData) => {
    if (user) {
      const submitData = {
        event_id: result.event_id,
        title: result.title,
        description: result.description,
        image: '',
        spots: result.spots,
        teams_per_spot: result.teams_per_spot,
        break_type: result.break_type,
        price: result.price,
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
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box mb={5}>
        <ImageUploader />
      </Box>

      <FormControl isInvalid={!!errors.event_id} mb={5}>
        <FormLabel>Event ID</FormLabel>
        <Input
          {...register('event_id')}
          isReadOnly={!!event_id || !!break_data}
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

        <FormControl
          isInvalid={!!errors.price}
          width="50%"
          px={gridSpace.child}
        >
          <FormLabel>Price</FormLabel>
          <Input {...register('price')} />
          <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex mx={gridSpace.parent} mb={10}>
        <FormControl
          isInvalid={!!errors.spots}
          width="50%"
          px={gridSpace.child}
        >
          <FormLabel>Spots</FormLabel>
          <Input {...register('spots')} />
          <FormErrorMessage>{errors.spots?.message}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!errors.teams_per_spot}
          width="50%"
          px={gridSpace.child}
        >
          <FormLabel>Teams Per Spot</FormLabel>
          <Input {...register('teams_per_spot')} />
          <FormErrorMessage>{errors.teams_per_spot?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex justifyContent="center">
        <Button mb={4} px={10} colorScheme="blue" type="submit">
          {operation === 'UPDATE' ? 'Update Break' : 'Add Break'}
        </Button>
      </Flex>
    </form>
  );
};

export default AddBreakForm;
