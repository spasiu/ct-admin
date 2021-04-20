import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { gql, useQuery } from '@apollo/client';
import format from 'date-fns/format';
import { MdDelete, MdCheckBoxOutlineBlank } from 'react-icons/md';

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
} from '@chakra-ui/react';

import { gridSpace } from '@config/chakra/constants';
import Layout from '@layouts';
import Sidebar from '@components/Sidebar';
import SEO from '@components/SEO';
import AddEventForm from '@components/Forms/AddEventForm';
import AddBreakForm from '@components/Forms/AddBreakForm';
import FormModal from '@components/Modals/FormModal';
import { GetEventsQuery } from '@generated/graphql';

const GET_EVENTS = gql`
  query GetEvents {
    Events(limit: 10) {
      id
      title
      start_time
    }
  }
`;

/**
 *
 * TODO: Handle errors on query
 * TODO: Add sorting
 * TODO: Add pagination on query
 * TODO: Add multi select
 * TODO: Filter by upcoming only
 * TODO: Select row
 *
 */
const EventsPage: React.FC = () => {
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
  const [isAddBreakModalOpen, setAddBreakModalOpen] = useState(false);

  const {
    loading: eventLoading,
    error: eventError,
    data: eventData,
  } = useQuery<GetEventsQuery>(GET_EVENTS);

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
              onClick={() => setAddEventModalOpen(true)}
            >
              Add Event
            </Button>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="blue"
              isFullWidth
              onClick={() => setAddBreakModalOpen(true)}
            >
              Add Break
            </Button>
          </Sidebar>
          <Box flex={1} px={gridSpace.child} pt={8}>
            <Heading as="h2" size="md" mb={6}>
              Upcoming Events
            </Heading>

            {!eventLoading && eventData && (
              <Table>
                <Thead>
                  <Tr>
                    <Th>
                      <Icon as={MdCheckBoxOutlineBlank} w={6} h={6} />
                    </Th>
                    <Th>Date</Th>
                    <Th>Time</Th>
                    <Th>Event Name</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {eventData.Events.map((event) => {
                    const startDate = new Date(event.start_time);

                    return (
                      <Tr key={event.id} bg="white">
                        <Td>
                          <Icon as={MdCheckBoxOutlineBlank} w={6} h={6} />
                        </Td>
                        <Td>{format(startDate, 'LLL dd, y')}</Td>
                        <Td>{format(startDate, 'h:mm a')}</Td>
                        <Td>{event.title}</Td>
                        <Td textAlign="right">
                          <IconButton
                            borderRadius="50%"
                            bg="buttons.bgRed"
                            aria-label="Delete"
                            icon={<Icon as={MdDelete} w={6} h={6} />}
                          />
                        </Td>
                      </Tr>
                    );
                  })}
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
            callback={() => {
              setAddEventModalOpen(false);
            }}
          />
        </FormModal>
        <FormModal
          title="Add Break"
          isOpen={isAddBreakModalOpen}
          setModalOpen={setAddBreakModalOpen}
        >
          <AddBreakForm
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
