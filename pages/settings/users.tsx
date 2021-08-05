import React from 'react';
import { MdCheck } from 'react-icons/md';

import {
  Box,
  Icon,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

import Layout from '@layouts';
import SEO from '@components/SEO';
import AddUserForm from '@components/Forms/AddUserForm';

import { useGetAdminManagerUsersQuery } from '@generated/graphql';

const UserManagementPage: React.FC = () => {
  const {
    data: usersQueryData,
    loading: usersQueryLoading,
    error: usersQueryError,
    refetch: refetchUsers,
  } = useGetAdminManagerUsersQuery();

  return (
    <>
      <SEO title="Settings" />
      <Layout pageNav="settings">
        <Box flex={1}>
          <Heading as="h1" size="md" mb={10}>
            Users
          </Heading>

          <Box borderRadius={5} bg="white" p={5} maxWidth="800px" mb={10}>
            <AddUserForm callback={refetchUsers} />
          </Box>
        </Box>
        {usersQueryData && (
          <Table>
            <Thead>
              <Tr>
                <Th>Email</Th>
                <Th>Admin</Th>
                <Th>Breaker</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {usersQueryData.Users.map((item) => (
                <Tr key={item.id} bg="white">
                  <Td>{item.email}</Td>
                  <Td>
                    {item.role === 'ADMIN' && <Icon as={MdCheck} w={6} h={6} />}
                  </Td>
                  <Td>
                    {item.is_breaker && <Icon as={MdCheck} w={6} h={6} />}
                  </Td>
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

export default UserManagementPage;
