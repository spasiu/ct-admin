import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AddIcon } from '@chakra-ui/icons';
import { MdEdit } from 'react-icons/md';
import { HiArchive } from 'react-icons/hi';
import { RiInboxUnarchiveLine } from 'react-icons/ri';
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
  useArchiveProductsByIdsMutation,
  useUnarchiveProductsByIdsMutation,
} from '@generated/graphql';

import paths from '@config/paths';

import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import FormModal from '@components/Modals/FormModal';
import AddProductForm from '@components/Forms/AddProductForm';
import StatDisplay from '@components/StatDisplay';
import ArchiveConfirm from '@components/ArchiveConfirm';

import {
  TSelectedProduct,
  TProductSelectedInventory,
} from '@customTypes/products';

/**
 * TODO: add archive for inventory
 *
 */
const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const productId = id as string;
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
    archiveProducts,
    {
      data: archiveProductsMutationData,
      loading: archiveProductsMutationLoading,
      error: archiveProductsMutationError,
    },
  ] = useArchiveProductsByIdsMutation({
    onCompleted: () => {
      refetchProduct();
    },
  });

  const [
    UnarchiveProducts,
    {
      data: UnarchiveProductsMutationData,
      loading: UnarchiveProductsMutationLoading,
      error: UnarchiveProductsMutationError,
    },
  ] = useUnarchiveProductsByIdsMutation({
    onCompleted: () => {
      refetchProduct();
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
                parallel: product?.parallel,
                insert: product?.insert,
                rookie_card: product?.rookie_card,
                memorabilia: product?.memorabilia,
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

          {product?.available && (
            <Button
              size="sm"
              leftIcon={<HiArchive />}
              colorScheme="blue"
              onClick={() => {
                archiveProducts({
                  variables: { ids: [product?.id] },
                });
              }}
            >
              Archive
            </Button>
          )}

          {!product?.available && (
            <Button
              size="sm"
              leftIcon={<RiInboxUnarchiveLine />}
              colorScheme="green"
              onClick={() => {
                UnarchiveProducts({
                  variables: { ids: [product?.id] },
                });
              }}
            >
              Make Available
            </Button>
          )}
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

                </Box>
              </HStack>
            </Box>
          )}

          <Table width="100%" mb={12}>
            <Thead>
              <Tr>
                <Th>Breaks</Th>
              </Tr>
            </Thead>
            <Tbody>
              {product?.break_products?.map((item) => (
                <Tr key={item.Break.id} bg="white">
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

      </Layout>
    </>
  );
};

export default ProductDetailsPage;
