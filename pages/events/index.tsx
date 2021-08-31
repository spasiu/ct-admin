import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { MdVisibility, MdEdit } from 'react-icons/md';
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
  IconButton,
  HStack,
} from '@chakra-ui/react';

import paths from '@config/paths';
import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import AddEventForm from '@components/Forms/AddEventForm';
import FormModal from '@components/Modals/FormModal';
import ArchiveConfirm from '@components/ArchiveConfirm';

import {
  useGetEventsQuery,
  useDeleteEventsAndBreaksByEventIdsMutation,
} from '@generated/graphql';

type TSelectedEvent = {
  id: string;
  title: string;
  description: string;
  start_time: string;
  status: string;
  image: string;
};

/**
 *
 * TODO: Handle errors on query
 * TODO: Add sorting
 * TODO: Add pagination on query
 * TODO: Add multi select
 * TODO: Filter by upcoming only
 * TODO: Select row
 * TODO: Attach breaks to something else when deleting event
 *
 */
const EventsPage: React.FC = () => {
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
    TSelectedEvent | undefined
  >(undefined);

  const {
    loading: eventQueryLoading,
    error: eventQueryError,
    data: eventQueryData,
    refetch: refetchEvents,
  } = useGetEventsQuery();

  const [
    deleteEventsById,
    {
      data: deleteEventsMutationData,
      loading: deleteEventsMutationLoading,
      error: deleteEventsMutationError,
    },
  ] = useDeleteEventsAndBreaksByEventIdsMutation({
    onCompleted: () => {
      refetchEvents();
    },
  });

  return (
    <>
      <SEO title="Events" />
      <Layout>
        <ActionBar>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            size="sm"
            onClick={() => {
              setSelectedEvent(undefined);
              setAddEventModalOpen(true);
            }}
          >
            Add Event
          </Button>
        </ActionBar>

        <Box flex={1} pt={8}>
          <Heading as="h2" size="md" mb={6}>
            Upcoming Events
          </Heading>

          {eventQueryData && (
            <Table>
              <Thead>
                <Tr>
                  <Th>Event Name</Th>
                  <Th>Breaker</Th>
                  <Th>Date & Time</Th>
                  <Th>Breaks</Th>
                  <Th>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {eventQueryData.Events.map((event) => (
                  <Tr key={event.id} bg="white">
                    <Td>{event.title}</Td>
                    <Td>{`${event.User?.first_name} ${event.User?.last_name}`}</Td>
                    <Td>
                      {format(new Date(event.start_time), 'LLL dd, y @ h:mm a')}
                    </Td>
                    <Td>{event.Breaks_aggregate?.aggregate?.count}</Td>
                    <Td>{event.status}</Td>
                    <Td textAlign="right">
                      <HStack spacing={2} justify="flex-end">
                        <NextLink href={`${paths.events}/${event.id}`} passHref>
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
                            setSelectedEvent(event); // set event
                            setAddEventModalOpen(true);
                          }}
                        />
                        <ArchiveConfirm
                          callback={() => {
                            deleteEventsById({
                              variables: { ids: [event.id] },
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
        </Box>

        <FormModal
          title="Add Event"
          isOpen={isAddEventModalOpen}
          setModalOpen={setAddEventModalOpen}
        >
          <AddEventForm
            event={selectedEvent}
            callback={() => {
              setAddEventModalOpen(false);
              refetchEvents();
            }}
          />
        </FormModal>
      </Layout>
    </>
  );
};

export default EventsPage;
