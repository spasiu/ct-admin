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
  Flex,
  Icon,
  Textarea,
} from '@chakra-ui/react';

const schema = yup.object().shape({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
  start_time: yup
    .date()
    .min(new Date(), 'The start time must be after the current time')
    .required(),
});

type TFormData = {
  id?: string;
  title: string;
  description: string;
};

type TFormProps = {
  product?: {
    id: string;
    title: string;
    description: string;
  };
  callback: () => void;
};

/**
 *
 * TODO: Handle errors
 * TODO: Add image
 *
 */
const AddProductForm: React.FC<TFormProps> = ({ product, callback }) => {
  const operation = product?.id ? 'UPDATE' : 'ADD';

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFormData) => {
    switch (operation) {
      case 'ADD':
        break;
      case 'UPDATE':
        break;
    }
  };

  return <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}></form>;
};

export default AddProductForm;
