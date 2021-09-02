import React, { useState } from 'react';
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import { MdEdit } from 'react-icons/md';
import NextLink from 'next/link';
import Imgix from 'react-imgix';

import {
  Heading,
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Link,
} from '@chakra-ui/react';

import {
  useGetBreakByIdQuery,
  useUpdateBreakMutation,
  Break_Status_Enum,
} from '@generated/graphql';

import paths from '@config/paths';
import { BreakTypeValues } from '@config/values';

import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import StatDisplay from '@components/StatDisplay';
import AddBreakForm from '@components/Forms/AddBreakForm';
import FormModal from '@components/Modals/FormModal';

/**
 * TODO: Add edit break button
 */
const BreakPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const breakId = id as string;
  const [isAddBreakModalOpen, setAddBreakModalOpen] = useState(false);

  const {
    loading: breakQueryLoading,
    error: breakQueryError,
    data: breakQueryData,
    refetch: refetchBreak,
  } = useGetBreakByIdQuery({ variables: { id: breakId } });

  const [
    updateBreak,
    {
      data: updateBreakMutationData,
      loading: updateBreakMutationLoading,
      error: updateBreakMutationError,
    },
  ] = useUpdateBreakMutation({
    onCompleted: () => {
      refetchBreak({
        id: breakId,
      });
    },
  });

  return (
    <>
      <SEO title="Break" />
      <Layout>
        <ActionBar>
          <Button
            leftIcon={<MdEdit />}
            colorScheme="blue"
            size="sm"
            onClick={() => {
              setAddBreakModalOpen(true);
            }}
          >
            Edit Break
          </Button>
        </ActionBar>
        <Box flex={1} pt={8}>
          {breakQueryData && (
            <>
              <Box
                mb={12}
                p={8}
                backgroundColor="white"
                borderRadius={15}
                boxShadow="0px 0px 4px rgba(0,0,0,0.1)"
              >
                <Heading as="h1" size="lg" mb={8}>
                  {breakQueryData.Breaks_by_pk?.title}
                </Heading>

                <HStack spacing={10} mb={7} align="flex-start">
                  <Imgix
                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${breakQueryData.Breaks_by_pk?.image}`}
                    width={385}
                    height={385}
                    imgixParams={{ fit: 'clamp' }}
                  />
                  <Box flex="1">
                    <HStack spacing={4} mb={7}>
                      {breakQueryData.Breaks_by_pk?.status ===
                        Break_Status_Enum.Draft && (
                        <Button
                          colorScheme="blue"
                          size="sm"
                          onClick={() => {
                            updateBreak({
                              variables: {
                                id: breakId,
                                data: {
                                  status: Break_Status_Enum.Available,
                                },
                              },
                            });
                          }}
                        >
                          Publish
                        </Button>
                      )}

                      {breakQueryData.Breaks_by_pk?.status !==
                        Break_Status_Enum.Draft && (
                        <Button
                          colorScheme="blue"
                          size="sm"
                          onClick={() => {
                            updateBreak({
                              variables: {
                                id: breakId,
                                data: {
                                  status: Break_Status_Enum.Draft,
                                },
                              },
                            });
                          }}
                        >
                          Set to Draft
                        </Button>
                      )}
                    </HStack>

                    <Box mb={7}>
                      <Heading as="h3" size="sm" mb={1}>
                        Status:
                      </Heading>
                      <Text>{breakQueryData.Breaks_by_pk?.status}</Text>
                    </Box>

                    <Box mb={7}>
                      <Heading as="h3" size="sm" mb={1}>
                        Description:
                      </Heading>
                      <Text>{breakQueryData.Breaks_by_pk?.description}</Text>
                    </Box>

                    <Box mb={7}>
                      <Heading as="h3" size="sm" mb={1}>
                        Type:
                      </Heading>
                      {
                        BreakTypeValues.find(
                          (t) =>
                            t.value === breakQueryData.Breaks_by_pk?.break_type,
                        )?.label
                      }
                    </Box>

                    <Box mb={7}>
                      <Heading as="h3" size="sm" mb={1}>
                        Event:
                      </Heading>
                      <Text>
                        <NextLink
                          href={`${paths.events}/${breakQueryData.Breaks_by_pk?.Event?.id}`}
                          passHref
                        >
                          <Link textDecoration="underline">
                            {`${breakQueryData.Breaks_by_pk?.Event?.title}`}
                          </Link>
                        </NextLink>

                        <br />
                        {format(
                          new Date(
                            breakQueryData.Breaks_by_pk?.Event?.start_time,
                          ),
                          'LLL dd, y @ h:mm a',
                        )}
                      </Text>
                    </Box>

                    <HStack spacing={14}>
                      {breakQueryData.Breaks_by_pk?.spots && (
                        <StatDisplay
                          label="Spots"
                          value={`${breakQueryData.Breaks_by_pk?.spots}`}
                        />
                      )}

                      {breakQueryData.Breaks_by_pk?.spots && (
                        <StatDisplay
                          label="Teams/Spot"
                          value={breakQueryData.Breaks_by_pk?.spots}
                        />
                      )}
                    </HStack>
                  </Box>
                </HStack>
              </Box>

              <Heading as="h2" size="lg" mb={6}>
                Products
              </Heading>

              <Table mb={12}>
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {breakQueryData.Breaks_by_pk?.Inventory?.map((item) => (
                    <Tr key={item.id} bg="white">
                      <Td>{item.Product?.description}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Heading as="h2" size="lg" mb={6}>
                Spots
              </Heading>

              <Table mb={12}>
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th textAlign="right">Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {breakQueryData.Breaks_by_pk?.BreakProductItems?.map(
                    (item) => (
                      <Tr key={item.id} bg="white">
                        <Td>{item.title}</Td>
                        <Td textAlign="right">
                          {new Intl.NumberFormat('en', {
                            style: 'currency',
                            currency: 'USD',
                          }).format(item.price || 0)}
                        </Td>
                      </Tr>
                    ),
                  )}
                </Tbody>
              </Table>
            </>
          )}
        </Box>

        {breakQueryData && breakQueryData.Breaks_by_pk && <FormModal
          title="Add Break"
          isOpen={isAddBreakModalOpen}
          setModalOpen={setAddBreakModalOpen}
          closeOnEsc={false}
        >
          <AddBreakForm
            event_id={breakQueryData.Breaks_by_pk?.Event?.id}
            event_title={breakQueryData.Breaks_by_pk?.Event?.title}
            break_data={breakQueryData.Breaks_by_pk}
            callback={() => {
              setAddBreakModalOpen(false);
              refetchBreak({
                id: breakId,
              });
            }}
          />}
        </FormModal>
      </Layout>
    </>
  );
};

export default BreakPage;
