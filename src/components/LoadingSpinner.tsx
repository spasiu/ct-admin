import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

// TODO: Implement everyone that needs a loading spinner!

const LoadingSpinner = () => (
  <Flex
    position="absolute"
    bg="white"
    top="0"
    left="0"
    width="100%"
    height="100%"
    opacity="0.7"
    zIndex="1"
    justifyContent="center"
    alignItems="center"
  >
    <Spinner size="lg" />
  </Flex>
);

export default LoadingSpinner;
