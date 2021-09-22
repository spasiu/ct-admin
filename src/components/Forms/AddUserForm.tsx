import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthState } from 'react-firebase-hooks/auth';
import * as yup from 'yup';

import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Checkbox,
  Button,
  HStack,
  Box,
  Text,
} from '@chakra-ui/react';

import { auth, functions } from '@config/firebase';

import { TAddUserFormData, TAddUserFormProps } from '@customTypes/users';

const schema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Required'),
  isAdmin: yup.boolean(),
  isBreaker: yup.boolean(),
});

const AddUserForm: React.FC<TAddUserFormProps> = ({ callback }) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const updatePermissions = functions.httpsCallable('userUpdatePermissions');

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<TAddUserFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      isAdmin: false,
      isBreaker: false,
    },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TAddUserFormData) => {
    if (user && !loading) {
      setLoading(true);
      setMessage('');

      updatePermissions({
        email: result.email,
        setAdmin: result.isAdmin,
        setBreaker: result.isBreaker,
      })
        .then(() => {
          reset();
          setLoading(false);
          callback && callback();
        })
        .catch((e) => {
          setLoading(false);
          setMessage(e.message);
          console.log(e);
        });
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      {message && <Text color="red">{message}</Text>}
      <HStack spacing={8} p={0} alignItems="flex-start">
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter user email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <HStack spacing={8} pt={9}>
          <Controller
            name="isAdmin"
            control={control}
            render={({ field: props }) => (
              <Checkbox
                size="lg"
                onChange={(e) => props.onChange(e.target.checked)}
                isChecked={props.value}
              >
                Admin
              </Checkbox>
            )}
          />

          <Controller
            name="isBreaker"
            control={control}
            render={({ field: props }) => (
              <Checkbox
                size="lg"
                onChange={(e) => props.onChange(e.target.checked)}
                isChecked={props.value}
              >
                Breaker
              </Checkbox>
            )}
          />
        </HStack>

        <Box pt={8}>
          <Button
            px={10}
            colorScheme="blue"
            type="submit"
            isDisabled={loading}
            isLoading={loading}
          >
            Add Permissions
          </Button>
        </Box>
      </HStack>
    </form>
  );
};

export default AddUserForm;
