import React from 'react';

import { VStack, Box } from '@chakra-ui/react';

type SidebarType = {
  children?: React.ReactNode;
  px?: (number | string | null)[];
};

const Sidebar: React.FC<SidebarType> = ({
  children,
  px = [0],
}: SidebarType) => {
  return (
    <Box width="20%" minWidth="270px" px={px}>
      <VStack borderRadius={5} bg="white" p={6} spacing={4}>
        {children}
      </VStack>
    </Box>
  );
};

export default Sidebar;
