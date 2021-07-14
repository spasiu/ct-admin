import React from 'react';
import Helmet from 'react-helmet';

import { Box } from '@chakra-ui/react';

import Header from '@components/Header';

type TLayoutProps = {
  children: React.ReactNode;
  pageNav?: string;
};

const Layout: React.FC<TLayoutProps> = ({ children, pageNav }) => {
  return (
    <>
      <Helmet defaultTitle="Home" titleTemplate="Cards & Treasure Admin - %s" />
      <Box>
        <Header pageNav={pageNav} />
        <Box width="100%" p={[3, null, 6, 8]}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
