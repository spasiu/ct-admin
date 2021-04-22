import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import format from 'date-fns/format';

import {
  Heading,
  Flex,
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

import { gridSpace } from '@config/chakra/constants';
import Layout from '@layouts';
import Sidebar from '@components/Sidebar';
import SEO from '@components/SEO';
import AddBreakForm from '@components/Forms/AddBreakForm';
import FormModal from '@components/Modals/FormModal';
import { useGetEventByIdQuery } from '@generated/graphql';
import { BreakTypeValues } from '@config/values';

const EventPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const eventId = id as string;

  const [isAddBreakModalOpen, setAddBreakModalOpen] = useState(false);

  const {
    loading: eventQueryLoading,
    error: eventQueryError,
    data: eventQueryData,
    refetch: refetchEvent,
  } = useGetEventByIdQuery({ variables: { id: eventId } });

  return (
    <>
      <SEO title="Event" />
      <Layout>
        <Flex mx={gridSpace.parent}>
          <Sidebar px={gridSpace.child}>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="blue"
              isFullWidth
              onClick={() => {
                setAddBreakModalOpen(true);
              }}
            >
              Add Break
            </Button>
          </Sidebar>
          <Box flex={1} px={gridSpace.child} pt={8}>
            {eventQueryData && (
              <>
                <Heading as="h1" size="lg" mb={6}>
                  {eventQueryData.Events_by_pk?.title}
                </Heading>

                <Text>
                  <strong>Breaker:</strong>{' '}
                  {eventQueryData.Events_by_pk?.User?.id}
                </Text>

                <Text mb={10}>
                  <strong>Date:</strong> {}
                  {format(
                    new Date(eventQueryData.Events_by_pk?.start_time),
                    'LLL dd, y @ h:mm a',
                  )}
                </Text>

                <Heading as="h2" size="lg" mb={6}>
                  Breaks
                </Heading>

                <Table>
                  <Thead>
                    <Tr>
                      <Th>Title</Th>
                      <Th>Type</Th>
                      <Th>Spots Available</Th>
                      <Th>Price</Th>
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
                        <Td>{brk.price}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </>
            )}
          </Box>
        </Flex>

        <FormModal
          title="Add Break"
          isOpen={isAddBreakModalOpen}
          setModalOpen={setAddBreakModalOpen}
        >
          <AddBreakForm
            event_id={eventId}
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
