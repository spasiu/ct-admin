import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AddIcon } from '@chakra-ui/icons';
import { MdEdit } from 'react-icons/md';
import { HiArchive } from 'react-icons/hi';
import format from 'date-fns/format';
import NextLink from 'next/link';

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
  Link,
} from '@chakra-ui/react';

import {
  useGetProductByIdQuery,
  useDeleteProductsByIdsMutation,
} from '@generated/graphql';

import paths from '@config/paths';

import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import FormModal from '@components/Modals/FormModal';
import AddProductForm from '@components/Forms/AddProductForm';
import AddInventoryForm from '@components/Forms/AddInventoryForm';
import StatDisplay from '@components/StatDisplay';

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

const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const productId = id as string;
  const [isAddInventoryModalOpen, setAddInventoryModalOpen] = useState(false);
  const [isEditProductModalOpen, setEditProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    TSelectedProduct | undefined
  >(undefined);

  const {
    loading: productQueryLoading,
    error: productQueryError,
    data: productQueryData,
    refetch: refetchProduct,
  } = useGetProductByIdQuery({
    variables: { id: productId },
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
      router.push(paths.products);
    },
  });

  const product = productQueryData?.Products_by_pk;

  return (
    <>
      <SEO title="Product" />
      <Layout pageNav="products">
        <ActionBar>
          <Button
            size="sm"
            leftIcon={<AddIcon />}
            colorScheme="blue"
            onClick={() => {
              setAddInventoryModalOpen(true);
            }}
          >
            Add Inventory
          </Button>

          <Button
            size="sm"
            leftIcon={<MdEdit />}
            colorScheme="blue"
            onClick={() => {
              setSelectedProduct({
                id: product?.id,
                unit_of_measure: product?.unit_of_measure as string,
                year: product?.year || '',
                manufacturer: product?.manufacturer || '',
                brand: product?.brand || '',
                series: product?.series,
                category: product?.category || '',
                type: product?.type,
                boxes_per_case: product?.boxes_per_case,
                packs_per_box: product?.packs_per_box,
                cards_per_pack: product?.cards_per_pack,
                card_number: product?.card_number,
                player: product?.player,
                paralell: product?.paralell,
                insert: product?.insert,
                rookie_card: product?.rookie_card,
                memoribillia: product?.memoribillia,
                autograph: product?.autograph,
                numbered: product?.numbered,
                grader: product?.grader,
                grade: product?.grade,
              });
              setEditProductModalOpen(true);
            }}
          >
            Edit
          </Button>

          <Button
            size="sm"
            leftIcon={<HiArchive />}
            colorScheme="blue"
            onClick={() => {
              deleteProducts({
                variables: { ids: [product?.id] },
              });
            }}
          >
            Archive
          </Button>
        </ActionBar>

        <Box flex={1} pt={8}>
          {!productQueryLoading && (
            <Box
              mb={12}
              p={8}
              backgroundColor="white"
              borderRadius={15}
              boxShadow="0px 0px 4px rgba(0,0,0,0.1)"
            >
              <Heading as="h2" size="lg" mb={8}>
                {product?.description}
              </Heading>

              <HStack spacing={10} mb={7} align="flex-start">
                <Box flex="1">
                  <HStack spacing={14} mb={5}>
                    {product?.boxes_per_case && (
                      <StatDisplay
                        label="Boxes/Case"
                        value={product?.boxes_per_case}
                      />
                    )}

                    {product?.packs_per_box && (
                      <StatDisplay
                        label="Packs/Box"
                        value={product?.packs_per_box}
                      />
                    )}

                    {product?.cards_per_pack && (
                      <StatDisplay
                        label="Cards/Pack"
                        value={product?.cards_per_pack}
                      />
                    )}
                  </HStack>

                  <HStack spacing={14}>
                    <StatDisplay
                      label="# Available"
                      value={`${product?.unassignedCount?.aggregate?.count}`}
                    />

                    <StatDisplay
                      label="# Assigned"
                      value={`${product?.assignedCount?.aggregate?.count}`}
                    />

                    <StatDisplay
                      label="Avg. Cost"
                      value={new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(
                        product?.averageCost?.aggregate?.avg?.cost_basis || 0,
                      )}
                    />

                    <StatDisplay
                      label="Dollars on Hand"
                      value={new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(
                        product?.totalCost?.aggregate?.sum?.cost_basis || 0,
                      )}
                    />
                  </HStack>
                </Box>
              </HStack>
            </Box>
          )}

          <Table width="100%" mb={12}>
            <Thead>
              <Tr>
                <Th>Location</Th>
                <Th>Supplier</Th>
                <Th>Purchase Date</Th>
                <Th>Cost/Unit</Th>
                <Th>Break</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {product?.Inventory?.map((item) => (
                <Tr key={item.id} bg="white">
                  <Td>{item.location}</Td>
                  <Td>{item.supplier}</Td>
                  <Td>{format(new Date(item.purchase_date), 'LLL dd, y')}</Td>
                  <Td>
                    {new Intl.NumberFormat('en', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(item.cost_basis)}
                  </Td>
                  <Td>
                    {item.Break?.id && (
                      <NextLink
                        href={`${paths.breaks}/${item.Break?.id}`}
                        passHref
                      >
                        <Link textDecoration="underline">
                          {item.Break?.title}
                        </Link>
                      </NextLink>
                    )}
                  </Td>
                  <Td textAlign="right">
                    <HStack spacing={2} justify="flex-end">
                      <IconButton
                        aria-label="Edit"
                        icon={<MdEdit />}
                        onClick={() => {
                          console.log('edit');
                        }}
                      />

                      <IconButton
                        aria-label="Archive"
                        icon={<HiArchive />}
                        onClick={() => {
                          console.log('archive');
                        }}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <FormModal
          title="Edit Product"
          isOpen={isEditProductModalOpen}
          setModalOpen={setEditProductModalOpen}
        >
          <AddProductForm
            product={selectedProduct}
            callback={() => {
              setEditProductModalOpen(false);
              refetchProduct();
            }}
          />
        </FormModal>

        <FormModal
          title="Add Inventory"
          isOpen={isAddInventoryModalOpen}
          setModalOpen={setAddInventoryModalOpen}
        >
          <AddInventoryForm
            product_id={product?.id}
            callback={() => {
              setAddInventoryModalOpen(false);
              refetchProduct();
            }}
          />
        </FormModal>
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
