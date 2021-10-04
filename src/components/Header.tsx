import React from 'react';
import firebase from 'firebase';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';

import { HStack, Box, Flex, Link, Avatar, Button } from '@chakra-ui/react';

import { auth } from '@config/firebase';
import navigation, { TNavData } from '@config/navigation';
import paths from '@config/paths';

import { THeaderProps } from '@customTypes/components';

const Header: React.FC<THeaderProps> = ({ pageNav }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const secondaryNav = navigation[pageNav as keyof TNavData];

  return (
    <Box as="header" width={'100%'}>
      <Flex py={[2, null, 4]} px={6} bg="white" justifyContent={'flex-start'}>
        <Image
          src="/images/ct-logo.png"
          alt="Logo"
          width="80"
          height="60"
          objectFit="contain"
        />
        <HStack as="nav" align="center" ml={8} spacing={4}>
          {navigation.primary.map((item) => {
            const isCurrent =
              router.asPath === item.path ||
              (item.path !== '/' && router.asPath.indexOf(item.path) === 0);
            return (
              <Box key={`main-nav-item-${item.label}`}>
                <NextLink href={item.path} passHref>
                  <Link
                    px={5}
                    py={3}
                    borderRadius={5}
                    fontWeight="bold"
                    color={isCurrent ? 'white' : 'gray.800'}
                    backgroundColor={isCurrent ? 'red.600' : 'transparent'}
                    _hover={{
                      color: isCurrent ? 'white' : 'red.600',
                      textDecoration: isCurrent ? 'none' : 'underline',
                      cursor: isCurrent ? 'default' : 'pointer',
                    }}
                  >
                    {item.label}
                  </Link>
                </NextLink>
              </Box>
            );
          })}
        </HStack>
        {!loading && (
          <Flex ml="auto" alignItems={'center'}>
            {user && (
              <NextLink href={`${paths.profile}/${user.uid}`} passHref>
                <Avatar
                  as="a"
                  size="md"
                  src={user.photoURL || undefined}
                ></Avatar>
              </NextLink>
            )}
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
      {secondaryNav && (
        <Flex
          py={[2, null, 4]}
          px={6}
          bg="gray.200"
          justifyContent={'flex-start'}
        >
          <HStack>
            {secondaryNav.map((item) => {
              const isCurrent =
                router.asPath === item.path ||
                (item.path !== '/' && router.asPath.indexOf(item.path) === 0);

              return (
                <Box key={`sub-nav-item-${item.label}`}>
                  <NextLink href={item.path} passHref>
                    <Link
                      px={5}
                      py={3}
                      borderRadius={5}
                      fontWeight={isCurrent ? 'bold' : 'normal'}
                    >
                      {item.label}
                    </Link>
                  </NextLink>
                </Box>
              );
            })}
          </HStack>
        </Flex>
      )}
    </Box>
  );
};

export default Header;
