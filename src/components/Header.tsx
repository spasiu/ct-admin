import React from 'react';
import firebase from 'firebase';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';

import { auth } from '@config/firebase';
import { HStack, Box, Flex, Link, Avatar, Button } from '@chakra-ui/react';

import navigation from '@config/navigation.json';

const Header: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return (
    <Flex
      as="header"
      width={'100%'}
      p={[3, null, 6]}
      bg="white"
      alignItems={'center'}
      justifyContent={'flex-start'}
    >
      <Image
        src="/images/ct-logo.png"
        alt="Logo"
        width="90"
        height="70"
        objectFit="contain"
      />
      <HStack as="nav" align="center" ml={8} spacing={4}>
        {navigation.primary.map((item) => (
          <Box key={`main-nav-item-${item.label}`}>
            <NextLink href={item.path} passHref>
              <Link
                px={2}
                py={2}
                sx={{
                  fontWeight: 'bold',
                  borderBottomWidth: 3,
                  borderBottomColor:
                    router.asPath === item.path ? 'red.600' : 'transparent',
                }}
              >
                {item.label}
              </Link>
            </NextLink>
          </Box>
        ))}
      </HStack>
      {!loading && (
        <Flex ml="auto" alignItems={'center'}>
          {user && <Avatar size="md" src={user.photoURL || undefined}></Avatar>}
          {!user && (
            <Button
              onClick={(): Promise<void> =>
                firebase
                  .auth()
                  .signInWithPopup(googleProvider)
                  .then((result) => {
                    console.log(result);
                  })
              }
            >
              Sign In
            </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
