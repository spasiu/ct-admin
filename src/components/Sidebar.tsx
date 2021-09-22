import React from 'react';

import { VStack, Box } from '@chakra-ui/react';

import { TSidebar } from '@customTypes/components';

const Sidebar: React.FC<TSidebar> = ({ children, px = [0] }: TSidebar) => {
  return (
    <Box width="20%" minWidth="330px" px={px}>
      <VStack borderRadius={5} bg="white" p={6} spacing={4}>
        {children}
      </VStack>
    </Box>
  );
};

export default Sidebar;
