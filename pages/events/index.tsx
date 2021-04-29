import React, { useState } from 'react';
import { AddIcon, ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import format from 'date-fns/format';
import { MdDelete, MdPlaylistAdd, MdModeEdit } from 'react-icons/md';
import NextLink from 'next/link';

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
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import { gridSpace } from '@config/chakra/constants';
import paths from '@config/paths';
import Layout from '@layouts';
import Sidebar from '@components/Sidebar';
import SEO from '@components/SEO';
import AddEventForm from '@components/Forms/AddEventForm';
import AddBreakForm from '@components/Forms/AddBreakForm';
import FormModal from '@components/Modals/FormModal';
import {
  useGetEventsQuery,
  useDeleteEventsAndBreaksByEventIdsMutation,
} from '@generated/graphql';

type TSelectedEvent = {
  id: string;
  title: string;
  description: string;
  start_time: string;
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
  const [isAddBreakModalOpen, setAddBreakModalOpen] = useState(false);
  const [eventId, setEventId] = useState('');
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
        <Flex mx={gridSpace.parent}>
          <Sidebar px={gridSpace.child}>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="blue"
              isFullWidth
              onClick={() => {
                setSelectedEvent(undefined);
                setAddEventModalOpen(true);
              }}
            >
              Add Event
            </Button>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="blue"
              isFullWidth
              onClick={() => {
                setEventId(''); // reset event ID for blank modal
                setAddBreakModalOpen(true);
              }}
            >
              Add Break
            </Button>
          </Sidebar>
          <Box flex={1} px={gridSpace.child} pt={8}>
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
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {eventQueryData.Events.map((event) => (
                    <Tr key={event.id} bg="white">
                      <Td>
                        <NextLink href={`${paths.events}/${event.id}`} passHref>
                          <Link fontWeight="bold">
                            {event.title}
                            <ChevronRightIcon ml={2} />
                          </Link>
                        </NextLink>
                      </Td>
                      <Td>{`${event.User?.Profile?.first_name} ${event.User?.Profile?.last_name}`}</Td>
                      <Td>
                        {format(
                          new Date(event.start_time),
                          'LLL dd, y @ h:mm a',
                        )}
                      </Td>
                      <Td>{event.Breaks_aggregate?.aggregate?.count}</Td>
                      <Td textAlign="right">
                        <Menu>
                          <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                          />
                          <MenuList>
                            <MenuItem
                              icon={<Icon as={MdPlaylistAdd} w={4} h={4} />}
                              onClick={() => {
                                setEventId(event.id); // set event ID
                                setAddBreakModalOpen(true);
                              }}
                            >
                              Add Break
                            </MenuItem>
                            <MenuItem
                              icon={<Icon as={MdModeEdit} w={4} h={4} />}
                              onClick={() => {
                                setSelectedEvent(event); // set event
                                setAddEventModalOpen(true);
                              }}
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              icon={<Icon as={MdDelete} w={4} h={4} />}
                              onClick={() => {
                                deleteEventsById({
                                  variables: { ids: [event.id] },
                                });
                              }}
                            >
                              Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Box>
        </Flex>
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
        <FormModal
          title="Add Break"
          isOpen={isAddBreakModalOpen}
          setModalOpen={setAddBreakModalOpen}
        >
          <AddBreakForm
            event_id={eventId}
            callback={() => {
              setAddBreakModalOpen(false);
            }}
          />
        </FormModal>
      </Layout>
    </>
  );
};

export default EventsPage;
