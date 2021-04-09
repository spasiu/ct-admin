import React from 'react';

import { Heading, Flex, Box, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { gridSpace } from '@config/chakra/constants';

import Layout from '@layouts';
import Sidebar from '@components/Sidebar';
import SEO from '@components/SEO';

const ProductsPage: React.FC = () => {
  return (
    <>
      <SEO title="Products" />
      <Layout>
        <Flex width="100%" mx={gridSpace.parent}>
          <Sidebar px={gridSpace.child}>
            <Button leftIcon={<AddIcon />} colorScheme="blue" isFullWidth>
              Add Product
            </Button>
            <Button leftIcon={<AddIcon />} colorScheme="blue" isFullWidth>
              Add SKU
            </Button>
          </Sidebar>
          <Box flex={1} px={gridSpace.child} pt={8}>
            <Heading as="h2" size="md">
              Products
            </Heading>
          </Box>
        </Flex>
      </Layout>
    </>
  );
};

export default ProductsPage;
