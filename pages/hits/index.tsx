import React, { useState } from 'react';
import format from 'date-fns/format';
import { AddIcon } from '@chakra-ui/icons';
import { MdVisibility, MdVisibilityOff, MdEdit } from 'react-icons/md';
import NextLink from 'next/link';
import { functions } from '@config/firebase';

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
  Link,
  IconButton,
  HStack,
} from '@chakra-ui/react';

import {
  useGetHitsQuery,
  useArchiveHitsByIdMutation,
  useUpdateHitMutation,
} from '@generated/graphql';

import paths from '@config/paths';

import Layout from '@layouts';
import ActionBar from '@components/ActionBar';
import SEO from '@components/SEO';
import FormModal from '@components/Modals/FormModal';
import AddHitForm from '@components/Forms/AddHitForm';
import ArchiveConfirm from '@components/ArchiveConfirm';
import { TAddHitFormData, TSelectedHit } from '@customTypes/hits';

const HitsPage: React.FC = () => {
  const [isAddHitModalOpen, setAddHitModalOpen] = useState(false);
  const [selectedHit, setSelectedHit] = useState<TSelectedHit | undefined>(
    undefined,
  );

  const {
    data: getHitsQueryData,
    loading: getHitsQueryLoading,
    error: getHitsQueryError,
    refetch: refetchHits,
  } = useGetHitsQuery();

  const [
    archiveHit,
    {
      data: archiveHitMutationData,
      loading: archiveHitMutationLoading,
      error: archiveHitMutationError,
    },
  ] = useArchiveHitsByIdMutation({
    onCompleted: () => {
      refetchHits();
    },
  });

  const [ updateHit ] = useUpdateHitMutation({
    onCompleted: (updated) => {
      refetchHits();
      // send notification if this was the result of publication
      if (updated.update_Hits_by_pk && updated.update_Hits_by_pk.published) {
        sendHitNotification({
          userId: updated.update_Hits_by_pk.user_id,
          playerName: updated.update_Hits_by_pk.player
        });
      }
    },
  });

  const sendHitNotification = functions.httpsCallable('sendHitNotification');

  return (
    <>
      <SEO title="Hits" />
      <Layout>
        <ActionBar>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            size="sm"
            onClick={() => {
              setSelectedHit(undefined);
              setAddHitModalOpen(true);
            }}
          >
            Add Hit
          </Button>
        </ActionBar>

        <Box flex={1} pt={8}>
          <Heading as="h2" size="md" mb={6}>
            Hits
          </Heading>

          {getHitsQueryData && (
            <Table>
              <Thead>
                <Tr>
                  <Th>User</Th>
                  <Th>Break</Th>
                  <Th>Event Date & Time</Th>
                  <Th>Card</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {getHitsQueryData.Hits.map((hit) => (
                  <Tr key={hit.id} bg="white">
                    <Td>{hit.User.username}</Td>
                    <Td>
                      <NextLink
                        href={`${paths.breaks}/${hit.Break.id}`}
                        passHref
                      >
                        <Link textDecoration="underline">
                          {hit.Break.title}
                        </Link>
                      </NextLink>
                    </Td>
                    <Td>
                      {hit.Break.Event.start_time
                        ? format(
                            new Date(hit.Break.Event.start_time),
                            'LLL dd, y @ h:mm a',
                          )
                        : 'NO DATE'}
                    </Td>
                    <Td>
                      {
                        [
                          hit.Product?.year,
                          hit.Product?.manufacturer,
                          hit.Product?.brand,
                          hit.Product?.series,
                          hit.card_number,
                          hit.player,
                          hit.parallel,
                          hit.insert,
                          (hit.autograph)? 'Autograph' : '',
                          (hit.memoribillia)? hit.memoribillia : '',
                          (hit.rookie_card)? 'Rookie' : '',
                          (hit.numbered)? '/' + hit.numbered : ''
                        ].join(' ')
                      }
                    </Td>
                    <Td textAlign="right">
                      <HStack spacing={2} justify="flex-end">
                        <IconButton
                          aria-label="Edit"
                          icon={<MdEdit />}
                          onClick={() => {
                            setSelectedHit(hit);
                            setAddHitModalOpen(true);
                          }}
                        />

                        <IconButton
                          aria-label="Edit"
                          icon={hit.published ? <MdVisibility /> : <MdVisibilityOff />}
                          onClick={() => {
                            hit.published = !hit.published;
                            // not an ideal approach for stripping out extraneous types,
                            // but ok for this temporary use-case
                            const {Break, User, Product, ...updateData} = hit; 
                            updateHit({variables: {id: hit.id, data: updateData}});
                          }}
                        />

                        <ArchiveConfirm
                          callback={() => {
                            archiveHit({
                              variables: {
                                ids: [hit.id],
                              },
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
          title="Add Hit"
          size="3xl"
          isOpen={isAddHitModalOpen}
          setModalOpen={setAddHitModalOpen}
          closeOnEsc={false}
        >
          <AddHitForm
            hit={selectedHit}
            callback={() => {
              setAddHitModalOpen(false);
              refetchHits();
            }}
          />
        </FormModal>
      </Layout>
    </>
  );
};

export default HitsPage;
