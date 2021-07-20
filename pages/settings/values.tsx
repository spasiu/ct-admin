import React from 'react';

import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

import { useGetExtensibleValuesQuery } from '@generated/graphql';

import { ExtensibleValueFields } from '@config/values';

import Layout from '@layouts';
import SEO from '@components/SEO';
import ActionBar from '@components/ActionBar';
import AddExtensibleValueForm from '@components/Forms/AddExtensibleValueForm';

const ExtensibleValuesPage: React.FC = () => {
  const {
    data: extensibleValuesQueryData,
    loading: extensibleValuesQueryLoading,
    error: extensibleValuesQueryError,
    refetch: refetchExtensibleValues,
  } = useGetExtensibleValuesQuery();

  return (
    <>
      <SEO title="Settings" />
      <Layout pageNav="settings">
        <Box flex={1}>
          <Heading as="h1" size="md" mb={6}>
            Extensible Values
          </Heading>

          <Box borderRadius={5} bg="white" p={5} maxWidth="600px" mb={10}>
            <AddExtensibleValueForm callback={refetchExtensibleValues} />
          </Box>
        </Box>
        {extensibleValuesQueryData && (
          <Table>
            <Thead>
              <Tr>
                <Th>Field</Th>
                <Th>Value</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {extensibleValuesQueryData.ExtensibleValues.map((item) => (
                <Tr key={item.id} bg="white">
                  <Td>
                    {
                      ExtensibleValueFields.find((k) => item.field === k.value)
                        ?.label
                    }
                  </Td>
                  <Td>{item.value}</Td>
                  <Td></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Layout>
    </>
  );
};

export default ExtensibleValuesPage;
