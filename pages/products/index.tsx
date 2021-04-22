import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';

import {
  Heading,
  Flex,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

import Layout from '@layouts';
import Sidebar from '@components/Sidebar';
import SEO from '@components/SEO';
import FormModal from '@components/Modals/FormModal';
import AddSKUForm from '@components/Forms/AddSKUForm';
import { gridSpace } from '@config/chakra/constants';

import { useGetSkUsQuery } from '@generated/graphql';

const ProductsPage: React.FC = () => {
  const [isAddSKUModalOpen, setAddSKUModalOpen] = useState(false);
  const {
    data: skuQueryData,
    loading: skuQueryLoading,
    error: skuQueryError,
    refetch: refetchSKUs,
  } = useGetSkUsQuery();

  return (
    <>
      <SEO title="Products" />
      <Layout>
        <Flex mx={gridSpace.parent}>
          <Sidebar px={gridSpace.child}>
            <Button leftIcon={<AddIcon />} colorScheme="blue" isFullWidth>
              Add Product
            </Button>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="blue"
              isFullWidth
              onClick={() => setAddSKUModalOpen(true)}
            >
              Add SKU
            </Button>
          </Sidebar>
          <Box flex={1} px={gridSpace.child} pt={8}>
            <Heading as="h2" size="md" mb={6}>
              SKUs
            </Heading>

            {skuQueryData && (
              <Table width="100%">
                <Thead>
                  <Tr>
                    <Th>SKU ID</Th>
                    <Th>Category</Th>
                    <Th>Manufacturer</Th>
                    <Th>Brand</Th>
                    <Th>Product Type</Th>
                    <Th>Year</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {skuQueryData.SKU.map((sku) => (
                    <Tr key={sku.id} bg="white">
                      <Td>{sku.sku_id}</Td>
                      <Td>{sku.category}</Td>
                      <Td>{sku.manufacturer}</Td>
                      <Td>{sku.brand}</Td>
                      <Td>{sku.product_type}</Td>
                      <Td>
                        {sku.year2 ? `${sku.year1}-${sku.year2}` : sku.year1}
                      </Td>
                    </Tr>
                  ))}
                  <Tr>
                    <Td></Td>
                  </Tr>
                </Tbody>
              </Table>
            )}
          </Box>
        </Flex>
        <FormModal
          title="Add SKU"
          isOpen={isAddSKUModalOpen}
          setModalOpen={setAddSKUModalOpen}
        >
          <AddSKUForm
            callback={() => {
              setAddSKUModalOpen(false);
              refetchSKUs();
            }}
          />
        </FormModal>
      </Layout>
    </>
  );
};

export default ProductsPage;
