import React from 'react';

import { VStack, Box } from '@chakra-ui/react';

const Sidebar: React.FC = ({ children, ...props }) => {
  return (
    <Box width="20%" minWidth="270px" {...props}>
      <VStack borderRadius={5} bg="white" p={6} spacing={4}>
        {children}
      </VStack>
    </Box>
  );
};

export default Sidebar;
