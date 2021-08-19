import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import { AddIcon } from '@chakra-ui/icons';
import { MdEdit, MdVisibility } from 'react-icons/md';
import { HiArchive } from 'react-icons/hi';
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
} from '@chakra-ui/react';

import {
  useGetEventByIdQuery,
  useArchiveBreaksByIdMutation,
  useUpdateEventMutation,
  useUpdateBreakMutation,
  Event_Status_Enum,
  Break_Status_Enum,
} from '@generated/graphql';

import paths from '@config/paths';
import { auth, db } from '@config/firebase';
import { BreakTypeValues } from '@config/values';

import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import AddBreakForm from '@components/Forms/AddBreakForm';
import FormModal from '@components/Modals/FormModal';

type TSelectedBreak = {
  id?: string;
  title: string;
  description: string;
  image: string;
  break_type: string;
  spots: number;
  teams_per_spot?: number | null | undefined;
  price?: number;
  status: string;
  line_items?: {
    value: string;
    cost: number;
  }[];
  Inventory: {
    id: string;
    location: string;
    Product: {
      id: string;
      description?: string | null | undefined;
    };
  }[];
  BreakProductItems: {
    id: string;
    title: string;
    price: number;
  }[];
};

/**
 * TODO: Add remove event button
 * TODO: Add edit event button
 * TODO: Fix how archiving break works
 */
const EventPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const eventId = id as string;
  const [streamActive, setStreamActive] = useState(false);
  let watchStream: () => void;

  const [isAddBreakModalOpen, setAddBreakModalOpen] = useState(false);
  const [selectedBreak, setSelectedBreak] = useState<
    TSelectedBreak | undefined
  >(undefined);

  const {
    loading: eventQueryLoading,
    error: eventQueryError,
    data: eventQueryData,
    refetch: refetchEvent,
  } = useGetEventByIdQuery({ variables: { id: eventId } });

  const [
    archiveBreak,
    {
      data: archiveBreakMutationData,
      loading: archiveBreakMutationLoading,
      error: archiveBreakMutationError,
    },
  ] = useArchiveBreaksByIdMutation({
    onCompleted: () => {
      refetchEvent();
    },
  });

  const [
    updateEvent,
    {
      data: updateMutationData,
      loading: updateMutationLoading,
      error: updateMutationError,
    },
  ] = useUpdateEventMutation({
    onCompleted: () => {
      refetchEvent();
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
      refetchEvent();
    },
  });

  // Watch for user changes
  useEffect(() => {
    if (user) {
      watchStream = db
        .collection('Breakers')
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            const streamData = doc.data();

            if (
              streamData?.streamState === 'active' ||
              streamData?.streamState === 'connected'
            ) {
              setStreamActive(true);
            } else {
              setStreamActive(false);
            }
          }
        });
    }

    return () => {
      if (watchStream) {
        watchStream();
      }
    };
  }, [user]);

  return (
    <>
      <SEO title="Event" />
      <Layout>
        <Box flex={1} pt={8}>
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

                <HStack spacing={10} mb={7} align="flex-start">
                  <Imgix
                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${eventQueryData.Events_by_pk?.image}`}
                    width={385}
                    height={385}
                    imgixParams={{ fit: 'clamp' }}
                  />
                  <Box flex="1">
                    <HStack spacing={4} mb={7}>
                      {eventQueryData.Events_by_pk?.status ===
                        Event_Status_Enum.Draft && (
                        <>
                          <Button
                            colorScheme="green"
                            size="sm"
                            isDisabled={
                              eventQueryData.Events_by_pk?.Breaks.length === 0
                            }
                            onClick={() => {
                              updateEvent({
                                variables: {
                                  id: eventId,
                                  data: { status: Event_Status_Enum.Scheduled },
                                },
                              });
                            }}
                          >
                            Publish
                          </Button>
                          {eventQueryData.Events_by_pk?.Breaks.length === 0 && (
                            <Text fontSize="sm">
                              Must have at least one Break to publish
                            </Text>
                          )}
                        </>
                      )}

                      {eventQueryData.Events_by_pk?.status ===
                        Event_Status_Enum.Scheduled && (
                        <>
                          <Button
                            colorScheme="blue"
                            size="sm"
                            onClick={() => {
                              updateEvent({
                                variables: {
                                  id: eventId,
                                  data: { status: Event_Status_Enum.Draft },
                                },
                              });
                            }}
                          >
                            Set to Draft
                          </Button>

                          <Button
                            colorScheme="red"
                            size="sm"
                            isDisabled={
                              user?.uid !==
                                eventQueryData?.Events_by_pk?.User?.id ||
                              !streamActive
                            }
                            onClick={() => {
                              updateEvent({
                                variables: {
                                  id: eventId,
                                  data: { status: Event_Status_Enum.Live },
                                },
                              });
                            }}
                          >
                            Go Live
                          </Button>
                          {(user?.uid !==
                            eventQueryData?.Events_by_pk?.User?.id ||
                            !streamActive) && (
                            <Text fontSize="sm">
                              Must be logged in as breaker and broadcasting
                            </Text>
                          )}
                        </>
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

                    <Box mb={7}>
                      <Heading as="h3" size="sm" mb={1}>
                        Description:
                      </Heading>
                      <Text>{eventQueryData.Events_by_pk?.description}</Text>
                    </Box>

                    <Box>
                      <Heading as="h3" size="sm" mb={1}>
                        Date:
                      </Heading>
                      <Text m={0}>
                        {format(
                          new Date(eventQueryData.Events_by_pk?.start_time),
                          'LLL dd, y @ h:mm a',
                        )}
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              </Box>

              <Heading as="h2" size="lg" mb={6}>
                Breaks
              </Heading>

              <Box mb={6}>
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="blue"
                  size="sm"
                  onClick={() => {
                    setSelectedBreak(undefined);
                    setAddBreakModalOpen(true);
                  }}
                >
                  Add Break
                </Button>
              </Box>

              <Table mb={12}>
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>Type</Th>
                    <Th>Spots Available</Th>
                    <Th>Price</Th>
                    <Th>Status</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {eventQueryData.Events_by_pk?.Breaks?.map((brk) => (
                    <Tr key={brk.id} bg="white">
                      <Td>{brk.title}</Td>
                      <Td>
                        {
                          BreakTypeValues.find(
                            (t) => t.value === brk.break_type,
                          )?.label
                        }
                      </Td>
                      <Td>{`${brk.spots} / ${brk.spots}`}</Td>
                      <Td>
                        {brk.price
                          ? new Intl.NumberFormat('en', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(brk.price || 0)
                          : 'Multiple'}
                      </Td>
                      <Td>{brk.status}</Td>
                      <Td textAlign="right">
                        <HStack spacing={2} justify="flex-end">
                          {brk.status === Break_Status_Enum.Draft && (
                            <Button
                              colorScheme="blue"
                              size="sm"
                              height="40px"
                              mr={4}
                              onClick={() => {
                                updateBreak({
                                  variables: {
                                    id: brk.id,
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

                          <NextLink href={`${paths.breaks}/${brk.id}`} passHref>
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
                              setSelectedBreak(brk);
                              setAddBreakModalOpen(true);
                            }}
                          />

                          <IconButton
                            aria-label="Archive"
                            icon={<HiArchive />}
                            onClick={() => {
                              archiveBreak({ variables: { ids: [brk.id] } });
                            }}
                          />
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </>
          )}
        </Box>

        <FormModal
          title="Add Break"
          isOpen={isAddBreakModalOpen}
          setModalOpen={setAddBreakModalOpen}
          closeOnEsc={false}
        >
          <AddBreakForm
            event_id={eventId}
            event_title={eventQueryData?.Events_by_pk?.title}
            break_data={selectedBreak}
            callback={() => {
              setAddBreakModalOpen(false);
              refetchEvent();
            }}
          />
        </FormModal>
      </Layout>
    </>
  );
};

export default EventPage;
