import React from 'react';
import Helmet from 'react-helmet';

import { Flex, Box } from '@chakra-ui/react';

import Header from '@components/Header';

type TLayoutProps = {
  children: React.ReactNode;
  pageNav?: string;
};

const Layout: React.FC<TLayoutProps> = ({ children, pageNav }) => {
  return (
    <>
      <Helmet defaultTitle="Home" titleTemplate="Cards & Treasure Admin - %s" />
      <Flex direction="column" align="center">
        <Header pageNav={pageNav} />
        <Box width="100%" p={[3, null, 6, 8]}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
