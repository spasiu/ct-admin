import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdCameraAlt } from 'react-icons/md';
import { gql, useMutation } from '@apollo/client';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Icon,
  Select,
  Box,
} from '@chakra-ui/react';

import { auth } from '@config/firebase';
import { gridSpace } from '@config/chakra/constants';
import {
  InsertBreakMutation,
  InsertBreakMutationVariables,
  Break_Type_Enum,
} from '@generated/graphql';
import { BreakTypeValues } from '@config/values';

const INSERT_BREAK = gql`
  mutation InsertBreak($data: Breaks_insert_input!) {
    insert_Breaks_one(object: $data) {
      id
    }
  }
`;

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
  callback: () => void;
};

/**
 *
 * TODO: Handle errors
 *
 */
const AddBreakForm: React.FC<TFormProps> = ({ event_id, callback }) => {
  const [user] = useAuthState(auth);

  const [
    addBreak,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation<InsertBreakMutation, InsertBreakMutationVariables>(
    INSERT_BREAK,
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      event_id: event_id,
    },
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
      addBreak({
        variables: {
          data: {
            event_id: result.event_id,
            title: result.title,
            description: result.description,
            image: '',
            spots: result.spots,
            teams_per_spot: result.teams_per_spot,
            break_type: result.break_type,
            price: result.price,
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
        <Input {...register('description')} />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.event_id} mb={5}>
        <FormLabel>Event ID</FormLabel>
        <Input {...register('event_id')} />
        <FormErrorMessage>{errors.event_id?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.break_type} mb={5}>
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

      <Flex mx={gridSpace.parent}>
        <Box width="50%" px={gridSpace.child}>
          <FormControl isInvalid={!!errors.spots} mb={5}>
            <FormLabel>Spots</FormLabel>
            <Input {...register('spots')} />
            <FormErrorMessage>{errors.spots?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box width="50%" px={gridSpace.child}>
          <FormControl isInvalid={!!errors.teams_per_spot} mb={5}>
            <FormLabel>Teams Per Spot</FormLabel>
            <Input {...register('teams_per_spot')} />
            <FormErrorMessage>
              {errors.teams_per_spot?.message}
            </FormErrorMessage>
          </FormControl>
        </Box>
      </Flex>

      <FormControl isInvalid={!!errors.price} mb={5}>
        <FormLabel>Price</FormLabel>
        <Input {...register('price')} />
        <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
      </FormControl>

      <Flex justifyContent="center">
        <Button mb={4} px={10} colorScheme="blue" type="submit">
          Add Break
        </Button>
      </Flex>
    </form>
  );
};

export default AddBreakForm;
