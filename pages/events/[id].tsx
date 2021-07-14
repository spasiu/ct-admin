import React, { useState } from 'react';
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { MdDelete, MdModeEdit, MdEdit, MdVisibility } from 'react-icons/md';
import { HiArchive } from 'react-icons/hi';
import NextLink from 'next/link';

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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
  HStack,
  Image,
} from '@chakra-ui/react';

import { gridSpace } from '@config/chakra/constants';
import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import AddBreakForm from '@components/Forms/AddBreakForm';
import FormModal from '@components/Modals/FormModal';
import {
  useGetEventByIdQuery,
  useArchiveBreaksByIdMutation,
} from '@generated/graphql';
import { BreakTypeValues } from '@config/values';
import paths from '@config/paths';

type TSelectedBreak = {
  id?: string;
  title: string;
  description: string;
  image: string;
  break_type: string;
  spots: number;
  teams_per_spot?: number | null | undefined;
  price?: number;
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

  return (
    <>
      <SEO title="Event" />
      <Layout>
        <ActionBar>
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
        </ActionBar>
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
                  <Image
                    boxSize="sm"
                    objectFit="cover"
                    src="//cards-and-treasure-dev.imgix.net//2020-21-Topps-Chrome-Sapphire-Bundesliga-Soccer-Cards-thumb-950.jpeg?w=600&h=804&q=70"
                    alt="Event Image"
                  />
                  <Box flex="1">
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

              <Table mb={12}>
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
                      <Td>
                        {brk.price
                          ? new Intl.NumberFormat('en', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(brk.price || 0)
                          : 'Multiple'}
                      </Td>
                      <Td textAlign="right">
                        <HStack spacing={2} justify="flex-end">
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
