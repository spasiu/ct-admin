import React, { useState } from 'react';
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { MdDelete, MdModeEdit } from 'react-icons/md';

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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
} from '@chakra-ui/react';

import { gridSpace } from '@config/chakra/constants';
import Layout from '@layouts';
import Sidebar from '@components/Sidebar';
import SEO from '@components/SEO';
import AddBreakForm from '@components/Forms/AddBreakForm';
import FormModal from '@components/Modals/FormModal';
import {
  useGetEventByIdQuery,
  useDeleteBreakByIdsMutation,
} from '@generated/graphql';
import { BreakTypeValues } from '@config/values';

type TSelectedBreak = {
  id?: string;
  title: string;
  description: string;
  image: string;
  break_type: string;
  spots: number;
  teams_per_spot: number;
  price: string;
};

/**
 * TODO: Add remove event button
 * TODO: Add edit event button
 */
const EventPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const eventId = id as string;

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
    deleteBreak,
    {
      data: deleteBreakMutationData,
      loading: deleteBreakMutationLoading,
      error: deleteBreakMutationError,
    },
  ] = useDeleteBreakByIdsMutation({
    onCompleted: () => {
      refetchEvent();
    },
  });

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
                setSelectedBreak(undefined);
                setAddBreakModalOpen(true);
              }}
            >
              Add Break
            </Button>
          </Sidebar>
          <Box flex={1} px={gridSpace.child} pt={8}>
            {eventQueryData && (
              <>
                <Heading as="h1" size="lg" mb={8}>
                  {eventQueryData.Events_by_pk?.title}
                </Heading>

                <Box
                  mb={12}
                  p={8}
                  backgroundColor="white"
                  borderRadius={15}
                  boxShadow="0px 0px 4px rgba(0,0,0,0.1)"
                >
                  <Box mb={7}>
                    <Heading as="h3" size="md" mb={2}>
                      Breaker:
                    </Heading>
                    <Text>
                      {`${eventQueryData.Events_by_pk?.User?.Profile?.first_name} ${eventQueryData.Events_by_pk?.User?.Profile?.last_name}`}
                    </Text>
                  </Box>

                  <Box mb={7}>
                    <Heading as="h3" size="md" mb={2}>
                      Description:
                    </Heading>
                    <Text>{eventQueryData.Events_by_pk?.description}</Text>
                  </Box>

                  <Box>
                    <Heading as="h3" size="md" mb={2}>
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
                        <Td>{brk.price}</Td>
                        <Td textAlign="right">
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<HamburgerIcon />}
                            />
                            <MenuList>
                              <MenuItem
                                icon={<Icon as={MdModeEdit} w={4} h={4} />}
                                onClick={() => {
                                  setSelectedBreak(brk);
                                  setAddBreakModalOpen(true);
                                }}
                              >
                                Edit
                              </MenuItem>
                              <MenuItem
                                icon={<Icon as={MdDelete} w={4} h={4} />}
                                onClick={() => {
                                  deleteBreak({ variables: { ids: [brk.id] } });
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
