import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  FormLabel,
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';

import {
  TFilterProductsFormData,
  TFilterProductsFormProps,
} from '@customTypes/products';

const schema = yup.object().shape({
  search: yup.string(),
});

const FilterProductsForm: React.FC<TFilterProductsFormProps> = ({
  callback,
}) => {
  const [showReset, setShowReset] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFilterProductsFormData>({
    resolver: yupResolver(schema),
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFilterProductsFormData) => {
    if (result.search === '') {
      setShowReset(false);
    } else {
      setShowReset(true);
    }

    callback && callback(result.search);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <HStack spacing={8} p={0} alignItems="flex-end">
        <FormControl isInvalid={!!errors.search}>
          <FormLabel color={errors.search ? 'red' : 'gray.800'}>
            Filter
          </FormLabel>
          <InputGroup size="md">
            <Input {...register('search')} />
            {showReset && (
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => {
                    reset();
                    setShowReset(false);
                    callback && callback('');
                  }}
                >
                  Reset
                </Button>
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
      </HStack>
    </form>
  );
};

export default FilterProductsForm;
