import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  HStack,
  Textarea,
} from '@chakra-ui/react';

import { TChatFormData, TChatFormProps } from '@customTypes/forms';

const schema = yup.object().shape({
  text: yup.string(),
});

const ChatForm: React.FC<TChatFormProps> = ({ callback }) => {
  const { register, handleSubmit, reset } = useForm<TChatFormData>({
    resolver: yupResolver(schema),
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TChatFormData) => {
    if (result.text !== '') {
      reset();
      callback && callback(result.text);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <HStack spacing={3} p={0} >
        <Textarea size="md" {...register('text')} />
        <Button size="md" type="submit">
          Send
        </Button>
      </HStack>
    </form>
  );
};

export default ChatForm;
