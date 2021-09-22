import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthState } from 'react-firebase-hooks/auth';
import * as yup from 'yup';

import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  HStack,
} from '@chakra-ui/react';

import { useInsertExtensibleValuesMutation } from '@generated/graphql';

import { auth } from '@config/firebase';
import { ExtensibleValueFields } from '@config/values';

import {
  TExtensibleValuesFormData,
  TExtensibleValuesFormProps,
} from '@customTypes/forms';

const schema = yup.object().shape({
  value: yup.string().required('Required'),
  field: yup.string().required('Required'),
});

const AddExtensibleValueForm: React.FC<TExtensibleValuesFormProps> = ({
  callback,
}) => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<TExtensibleValuesFormData>({
    resolver: yupResolver(schema),
  });

  const [
    insertExtensibleValue,
    {
      data: insertMutationData,
      loading: insertMutationLoading,
      error: insertMutationError,
    },
  ] = useInsertExtensibleValuesMutation({
    onCompleted: () => {
      reset({ field: getValues('field') });
      callback && callback();
    },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TExtensibleValuesFormData) => {
    if (user && !insertMutationLoading) {
      const submitData = {
        field: result.field,
        value: result.value,
      };

      insertExtensibleValue({
        variables: {
          data: [submitData],
        },
      });
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <HStack spacing={8} p={0} alignItems="flex-end">
        <FormControl isInvalid={!!errors.field}>
          <FormLabel color={errors.field ? 'red' : 'gray.800'}>Field</FormLabel>
          <Select {...register('field')}>
            <option value="">Select...</option>
            {ExtensibleValueFields.map((f) => (
              <option key={`field-option-${f.value}`} value={f.value}>
                {f.label}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl isInvalid={!!errors.value}>
          <FormLabel color={errors.value ? 'red' : 'gray.800'}>Value</FormLabel>
          <Input {...register('value')} />
        </FormControl>

        <Button px={10} colorScheme="blue" type="submit">
          Add Value
        </Button>
      </HStack>
    </form>
  );
};

export default AddExtensibleValueForm;
