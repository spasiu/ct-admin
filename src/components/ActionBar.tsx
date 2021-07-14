import React from 'react';

import { HStack, Box } from '@chakra-ui/react';

type TActionBar = {
  children?: React.ReactNode;
};

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
