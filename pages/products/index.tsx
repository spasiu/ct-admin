import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { MdVisibility, MdEdit } from 'react-icons/md';
import { HiArchive } from 'react-icons/hi';
import NextLink from 'next/link';

import {
  useGetProductsQuery,
  useDeleteProductsByIdsMutation,
  Unit_Of_Measure_Enum,
} from '@generated/graphql';

import paths from '@config/paths';

import {
  Heading,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import FormModal from '@components/Modals/FormModal';
import AddProductForm from '@components/Forms/AddProductForm';

type TSelectedProduct = {
  id: string;
  unit_of_measure: string;
  year: string;
  manufacturer: string;
  brand: string;
  series?: string | null;
  category: string;
  type?: string | null;
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

/**
 *
 * TODO: Fix archive button to hide instead of delete product
 */
const ProductsPage: React.FC = () => {
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    TSelectedProduct | undefined
  >(undefined);

  const {
    data: sealedWaxProductQueryData,
    loading: sealedWaxProductLoading,
    error: sealedWaxProductError,
    refetch: refetchSealedProducts,
  } = useGetProductsQuery({
    variables: {
      unitOfMeasure: [
        Unit_Of_Measure_Enum.Box,
        Unit_Of_Measure_Enum.Case,
        Unit_Of_Measure_Enum.Pack,
      ],
    },
  });

  const {
    data: cardsProductQueryData,
    loading: cardsProductLoading,
    error: cardsProductError,
    refetch: refetchCardProducts,
  } = useGetProductsQuery({
    variables: {
      unitOfMeasure: [Unit_Of_Measure_Enum.Card],
    },
  });

  const [
    deleteProducts,
    {
      data: deleteProductsMutationData,
      loading: deleteProductsMutationLoading,
      error: deleteProductsMutationError,
    },
  ] = useDeleteProductsByIdsMutation({
    onCompleted: () => {
      refetchSealedProducts();
      refetchCardProducts();
    },
  });

  return (
    <>
      <SEO title="Products" />
      <Layout pageNav="products">
        <ActionBar>
          <Button
            size="sm"
            leftIcon={<AddIcon />}
            colorScheme="blue"
            onClick={() => {
              setSelectedProduct(undefined);
              setAddProductModalOpen(true);
            }}
          >
            Add Product
          </Button>
        </ActionBar>

        <Box flex={1} pt={8}>
          <Heading as="h2" size="md" mb={6}>
            Products
          </Heading>

          <Tabs size="lg" colorScheme="red">
            <TabList mb={6}>
              <Tab>Sealed Wax</Tab>
              <Tab>Cards</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                {sealedWaxProductQueryData && (
                  <Table width="100%">
                    <Thead>
                      <Tr>
                        <Th>Sport/Category</Th>
                        <Th>Unit of Measure</Th>
                        <Th>Year</Th>
                        <Th>Manufacturer</Th>
                        <Th>Brand</Th>
                        <Th>Series</Th>
                        <Th>Type</Th>
                        <Th># Available</Th>
                        <Th># Assigned</Th>
                        <Th>Avg. Cost</Th>
                        <Th>Dollars on Hand</Th>
                        <Th textAlign="right">Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {sealedWaxProductQueryData.Products.map((prod) => (
                        <Tr key={prod.id} bg="white">
                          <Td>{prod.category}</Td>
                          <Td>{prod.unit_of_measure}</Td>
                          <Td>{prod.year}</Td>
                          <Td>{prod.manufacturer}</Td>
                          <Td>{prod.brand}</Td>
                          <Td>{prod.series}</Td>
                          <Td>{prod.type}</Td>
                          <Td>{prod.unassignedCount?.aggregate?.count}</Td>
                          <Td>{prod.assignedCount?.aggregate?.count}</Td>
                          <Td>
                            {new Intl.NumberFormat('en', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(
                              prod.averageCost?.aggregate?.avg?.cost_basis || 0,
                            )}
                          </Td>
                          <Td>
                            {new Intl.NumberFormat('en', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(
                              prod.totalCost?.aggregate?.sum?.cost_basis || 0,
                            )}
                          </Td>
                          <Td textAlign="right">
                            <HStack spacing={2} justify="flex-end">
                              <NextLink
                                href={`${paths.products}/${prod.id}`}
                                passHref
                              >
                                <IconButton
                                  as="a"
                                  aria-label="View"
                                  icon={<MdVisibility />}
                                />
                              </NextLink>
                              <IconButton
                                aria-label="Edit"
                                icon={<MdEdit />}
                                onClick={() => {
                                  setSelectedProduct(prod);
                                  setAddProductModalOpen(true);
                                }}
                              />
                              <IconButton
                                aria-label="Archive"
                                icon={<HiArchive />}
                                onClick={() => {
                                  deleteProducts({
                                    variables: { ids: [prod.id] },
                                  });
                                }}
                              />
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                )}
              </TabPanel>
              <TabPanel p={0}>
                {cardsProductQueryData && (
                  <Table width="100%">
                    <Thead>
                      <Tr>
                        <Th>Sport/Category</Th>
                        <Th>Card</Th>
                        <Th># Available</Th>
                        <Th># Assigned</Th>
                        <Th>Avg. Cost</Th>
                        <Th>Dollars on Hand</Th>
                        <Th textAlign="right">Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {cardsProductQueryData.Products.map((prod) => (
                        <Tr key={prod.id} bg="white">
                          <Td>{prod.category}</Td>
                          <Td>{prod.description}</Td>
                          <Td>{prod.unassignedCount?.aggregate?.count}</Td>
                          <Td>{prod.assignedCount?.aggregate?.count}</Td>
                          <Td>
                            {new Intl.NumberFormat('en', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(
                              prod.averageCost?.aggregate?.avg?.cost_basis || 0,
                            )}
                          </Td>
                          <Td>
                            {new Intl.NumberFormat('en', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(
                              prod.totalCost?.aggregate?.sum?.cost_basis || 0,
                            )}
                          </Td>
                          <Td textAlign="right">
                            <HStack spacing={2} justify="flex-end">
                              <NextLink
                                href={`${paths.products}/${prod.id}`}
                                passHref
                              >
                                <IconButton
                                  as="a"
                                  aria-label="View"
                                  icon={<MdVisibility />}
                                />
                              </NextLink>
                              <IconButton
                                aria-label="Edit"
                                icon={<MdEdit />}
                                onClick={() => {
                                  setSelectedProduct(prod);
                                  setAddProductModalOpen(true);
                                }}
                              />
                              <IconButton
                                aria-label="Archive"
                                icon={<HiArchive />}
                                onClick={() => {
                                  deleteProducts({
                                    variables: { ids: [prod.id] },
                                  });
                                }}
                              />
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <FormModal
          title="Add Product"
          isOpen={isAddProductModalOpen}
          setModalOpen={setAddProductModalOpen}
        >
          <AddProductForm
            product={selectedProduct}
            callback={() => {
              setAddProductModalOpen(false);
              refetchSealedProducts();
              refetchCardProducts();
            }}
          />
        </FormModal>
      </Layout>
    </>
  );
};

export default ProductsPage;
