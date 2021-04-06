import React from 'react';

import { Flex } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" align="center" p={[3, '', 6]}>
      {children}
    </Flex>
  );
};

export default Layout;
