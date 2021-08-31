import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { MdVisibility, MdEdit } from 'react-icons/md';
import NextLink from 'next/link';

import {
  useGetProductsQuery,
  useArchiveProductsByIdsMutation,
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
import FilterForm from '@components/Forms/FilterForm';
import ArchiveConfirm from '@components/ArchiveConfirm';

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
  parallel?: string | null;
  insert?: string | null;
  rookie_card?: boolean | null;
  memoribillia?: string | null;
  autograph?: boolean | null;
  numbered?: number | null;
  grader?: string | null;
  grade?: string | null;
};

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
      input: '%',
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
      input: '%',
    },
  });

  const [
    archiveProducts,
    {
      data: archiveProductsMutationData,
      loading: archiveProductsMutationLoading,
      error: archiveProductsMutationError,
    },
  ] = useArchiveProductsByIdsMutation({
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

          <Box borderRadius={5} bg="white" p={5} maxWidth="600px" mb={10}>
            <FilterForm
              callback={(input: string) => {
                console.log(input);
                refetchSealedProducts({
                  unitOfMeasure: [
                    Unit_Of_Measure_Enum.Box,
                    Unit_Of_Measure_Enum.Case,
                    Unit_Of_Measure_Enum.Pack,
                  ],
                  input: `%${input}%`,
                });
                refetchCardProducts({
                  unitOfMeasure: [Unit_Of_Measure_Enum.Card],
                  input: `%${input}%`,
                });
              }}
            />
          </Box>

          <Tabs size="lg" colorScheme="red" mb={10}>
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
                                  // Remove agreggate fields
                                  const prodClone = (({
                                    totalCost,
                                    averageCost,
                                    unassignedCount,
                                    assignedCount,
                                    ...o
                                  }) => o)(prod);

                                  setSelectedProduct(prodClone);
                                  setAddProductModalOpen(true);
                                }}
                              />
                              <ArchiveConfirm
                                callback={() => {
                                  archiveProducts({
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
                                  // Remove agreggate fields
                                  const prodClone = (({
                                    totalCost,
                                    averageCost,
                                    unassignedCount,
                                    assignedCount,
                                    ...o
                                  }) => o)(prod);

                                  setSelectedProduct(prodClone);
                                  setAddProductModalOpen(true);
                                }}
                              />

                              <ArchiveConfirm
                                callback={() => {
                                  archiveProducts({
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
