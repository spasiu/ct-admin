import React, { useState } from 'react';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { useGetSkUsQuery, useDeleteSkuByIdsMutation } from '@generated/graphql';

import { gridSpace } from '@config/chakra/constants';

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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
} from '@chakra-ui/react';

import Layout from '@layouts';
import Sidebar from '@components/Sidebar';
import SEO from '@components/SEO';
import FormModal from '@components/Modals/FormModal';
import AddSKUForm from '@components/Forms/AddSKUForm';

type TSelectedSku = {
  id: string;
  sku_id: string;
  sku_type: string;
  location: string;
  year1: number;
  manufacturer: string;
  brand: string;
  series?: string | null;
  category: string;
  product_type?: string | null;
  boxes_per_case?: number | null;
  packs_per_box?: number | null;
  cards_per_pack?: number | null;
  card_number?: string | null;
  player?: string | null;
  paralell?: string | null;
  insert?: string | null;
  rookie_card?: boolean | null;
  memoribillia?: string | null;
  autograph?: boolean | null;
  numbered?: number | null;
  grader?: string | null;
  grade?: number | null;
};

const SkusPage: React.FC = () => {
  const [isAddSKUModalOpen, setAddSKUModalOpen] = useState(false);
  const [selectedSku, setSelectedSku] = useState<TSelectedSku | undefined>(
    undefined,
  );

  const {
    data: skuQueryData,
    loading: skuQueryLoading,
    error: skuQueryError,
    refetch: refetchSKUs,
  } = useGetSkUsQuery();

  const [
    deleteSKUs,
    {
      data: deleteSkuMutationData,
      loading: deleteSkuMutationLoading,
      error: deleteSkuMutationError,
    },
  ] = useDeleteSkuByIdsMutation({
    onCompleted: () => {
      refetchSKUs();
    },
  });

  return (
    <>
      <SEO title="SKUs" />
      <Layout pageNav="products">
        <Flex mx={gridSpace.parent}>
          <Sidebar px={gridSpace.child}>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="blue"
              isFullWidth
              onClick={() => {
                setSelectedSku(undefined);
                setAddSKUModalOpen(true);
              }}
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
                    <Th></Th>
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
                      <Td>{sku.year1}</Td>
                      <Td textAlign="right">
                        <Menu>
                          <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                          />
                          <MenuList>
                            <MenuItem
                              icon={<Icon as={MdModeEdit} w={4} h={4} />}
                              onClick={() => {
                                setSelectedSku(sku);
                                setAddSKUModalOpen(true);
                              }}
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              icon={<Icon as={MdDelete} w={4} h={4} />}
                              onClick={() => {
                                deleteSKUs({ variables: { ids: [sku.id] } });
                              }}
                            >
                              Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
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
            sku={selectedSku}
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

export default SkusPage;
