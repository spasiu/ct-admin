import React from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { Flex, Icon, Button } from '@chakra-ui/react';

const ImageUploader: React.FC = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
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
        <Icon as={RiImageAddFill} w={8} h={8} />
      </Flex>
      <Button colorScheme="red" size="xs">
        Upload Image
      </Button>
    </Flex>
  );
};

export default ImageUploader;
