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
      <HStack spacing={8} p={0} alignItems="flex-end">
        <FormControl>
          <InputGroup size="lg">
            <Input {...register('text')} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" type="submit">
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </HStack>
    </form>
  );
};

export default ChatForm;
