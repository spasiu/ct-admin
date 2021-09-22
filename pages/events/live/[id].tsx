import React from 'react';
import { useRouter } from 'next/router';
import { MdVisibility } from 'react-icons/md';
import NextLink from 'next/link';
import Imgix from 'react-imgix';
import { useAuthState } from 'react-firebase-hooks/auth';

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
  IconButton,
  HStack,
  Flex,
} from '@chakra-ui/react';

import {
  useGetLiveEventByIdQuery,
  useUpdateEventMutation,
  useUpdateBreakMutation,
  Event_Status_Enum,
  Break_Status_Enum,
  Break_Type_Enum,
} from '@generated/graphql';

import paths from '@config/paths';
import { auth, functions } from '@config/firebase';
import { BreakTypeValues } from '@config/values';

import Layout from '@layouts';
import SEO from '@components/SEO';
import Chat from '@components/Chat';
import BreakResult from '@components/BreakResult';

/**
 * TODO: Add auth
 */
const LiveEventPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const eventId = id as string;
  const startBreak = functions.httpsCallable('startBreak');

  const {
    loading: eventQueryLoading,
    error: eventQueryError,
    data: eventQueryData,
    refetch: refetchEvent,
  } = useGetLiveEventByIdQuery({ variables: { id: eventId } });

  const [
    updateEvent,
    {
      data: updateMutationData,
      loading: updateMutationLoading,
      error: updateMutationError,
    },
  ] = useUpdateEventMutation({
    onCompleted: () => {
      refetchEvent({ id: eventId });
    },
  });

  const [
    updateBreak,
    {
      data: updateBreakMutationData,
      loading: updateBreakMutationLoading,
      error: updateBreakMutationError,
    },
  ] = useUpdateBreakMutation({
    onCompleted: () => {
      refetchEvent({ id: eventId });
    },
  });

  console.log(eventQueryData);

  return (
    <>
      <SEO title="Event" />
      <Layout>
        <Flex alignItems="flex-start">
          <Box width={5 / 7} pt={8} pr={8}>
            {eventQueryData && (
              <>
                <Box
                  mb={12}
                  p={8}
                  backgroundColor="white"
                  borderRadius={15}
                  boxShadow="0px 0px 4px rgba(0,0,0,0.1)"
                >
                  <Heading as="h1" size="lg" mb={8}>
                    {eventQueryData.Events_by_pk?.title}
                  </Heading>

                  <HStack spacing={10} mb={0} align="flex-start">
                    <Imgix
                      src={`${process.env.NEXT_PUBLIC_IMG_URL}${eventQueryData.Events_by_pk?.image}`}
                      width={160}
                      height={160}
                      imgixParams={{ fit: 'clamp' }}
                    />
                    <Box flex="1">
                      <HStack spacing={4} mb={7}>
                        {eventQueryData.Events_by_pk?.status ===
                          Event_Status_Enum.Live && (
                          <Button
                            colorScheme="green"
                            size="sm"
                            onClick={() => {
                              updateEvent({
                                variables: {
                                  id: eventId,
                                  data: { status: Event_Status_Enum.Completed },
                                },
                              });
                            }}
                          >
                            Complete Event
                          </Button>
                        )}
                      </HStack>

                      <Box mb={7}>
                        <Heading as="h3" size="sm" mb={1}>
                          Status:
                        </Heading>
                        <Text>{eventQueryData.Events_by_pk?.status}</Text>
                      </Box>

                      <Box mb={7}>
                        <Heading as="h3" size="sm" mb={1}>
                          Breaker:
                        </Heading>
                        <Text>
                          {`${eventQueryData.Events_by_pk?.User?.first_name} ${eventQueryData.Events_by_pk?.User?.last_name}`}
                        </Text>
                      </Box>

                      <Box>
                        <Heading as="h3" size="sm" mb={1}>
                          Description:
                        </Heading>
                        <Text>{eventQueryData.Events_by_pk?.description}</Text>
                      </Box>
                    </Box>
                  </HStack>
                </Box>

                <Heading as="h2" size="lg" mb={6}>
                  Breaks
                </Heading>

                <Table mb={12}>
                  <Thead>
                    <Tr>
                      <Th>Title</Th>
                      <Th>Type</Th>
                      <Th>Spots</Th>
                      <Th>Status</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {eventQueryData.Events_by_pk?.Breaks?.map((brk) => (
                      <React.Fragment key={brk.id}>
                        <Tr bg="white">
                          <Td>{brk.title}</Td>
                          <Td>
                            {
                              BreakTypeValues.find(
                                (t) => t.value === brk.break_type,
                              )?.label
                            }
                          </Td>
                          <Td>{`${brk.spots} / ${brk.spots}`}</Td>
                          <Td>{brk.status}</Td>
                          <Td textAlign="right">
                            <HStack spacing={2} justify="flex-end">
                              {brk.status === Break_Status_Enum.Live &&
                                eventQueryData.Events_by_pk?.status ===
                                  Event_Status_Enum.Live && (
                                  <Button
                                    colorScheme="red"
                                    size="sm"
                                    height="40px"
                                    mr={4}
                                    onClick={() => {
                                      updateBreak({
                                        variables: {
                                          id: brk.id,
                                          data: {
                                            status: Break_Status_Enum.Completed,
                                          },
                                        },
                                      });
                                    }}
                                  >
                                    Stop Break
                                  </Button>
                                )}

                              {brk.status !== Break_Status_Enum.Draft &&
                                brk.status !== Break_Status_Enum.Live &&
                                eventQueryData.Events_by_pk?.status ===
                                  Event_Status_Enum.Live && (
                                  <Button
                                    colorScheme="green"
                                    size="sm"
                                    height="40px"
                                    mr={4}
                                    onClick={() => {
                                      startBreak({
                                        breakId: brk.id,
                                      }).then(() => {
                                        refetchEvent({ id: eventId });
                                      });
                                    }}
                                  >
                                    Start Break
                                  </Button>
                                )}

                              <NextLink
                                href={`${paths.breaks}/${brk.id}`}
                                passHref
                              >
                                <IconButton
                                  as="a"
                                  aria-label="View"
                                  icon={<MdVisibility />}
                                />
                              </NextLink>
                            </HStack>
                          </Td>
                        </Tr>
                        {brk.result &&
                          (brk.break_type === Break_Type_Enum.RandomDivision ||
                            brk.break_type === Break_Type_Enum.RandomTeam ||
                            brk.break_type === Break_Type_Enum.HitDraft) && (
                            <Tr>
                              <Td colSpan={5} p={0}>
                                <BreakResult
                                  breakId={brk.id}
                                  breakTitle={brk.title}
                                  type={brk.break_type}
                                  results={brk.result}
                                />
                              </Td>
                            </Tr>
                          )}

                        {(brk.break_type === Break_Type_Enum.Personal ||
                          brk.break_type === Break_Type_Enum.PickYourTeam ||
                          brk.break_type ===
                            Break_Type_Enum.PickYourDivision) && (
                          <Tr>
                            <Td colSpan={5} p={0}>
                              <BreakResult
                                breakId={brk.id}
                                breakTitle={brk.title}
                                type={brk.break_type}
                                results={brk.BreakProductItems}
                              />
                            </Td>
                          </Tr>
                        )}
                      </React.Fragment>
                    ))}
                  </Tbody>
                </Table>
              </>
            )}
          </Box>
          <Box width={2 / 7} pt={8} position="sticky" top={0}>
            <Chat eventId={eventId} />
          </Box>
        </Flex>
      </Layout>
    </>
  );
};

export default LiveEventPage;
