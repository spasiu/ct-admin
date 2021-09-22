import React from 'react';

import { HStack, Box } from '@chakra-ui/react';

import { TActionBar } from '@customTypes/components';

const ActionBar: React.FC<TActionBar> = ({ children }: TActionBar) => {
  return (
    <Box>
      <HStack borderRadius={5} bg="white" p={5} spacing={4}>
        {children}
      </HStack>
    </Box>
  );
};

export default ActionBar;
