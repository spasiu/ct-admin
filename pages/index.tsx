import React from 'react';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, functions } from '@config/firebase';
import { Box, Button } from '@chakra-ui/react';

import Layout from '@layouts';
import SEO from '@components/SEO';

/**
 * TODO: Watch for auth state change to update claims
 *
 */
const Home: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return (
    <>
      <SEO title="Home" />
      <Layout>
        {!loading && (
          <Box>
            {user ? (
              <Button
                size="md"
                colorScheme="blue"
                onClick={(): Promise<void> => firebase.auth().signOut()}
              >
                Sign out
              </Button>
            ) : (
              <Button
                size="md"
                colorScheme="blue"
                onClick={(): Promise<void> =>
                  firebase
                    .auth()
                    .signInWithPopup(googleProvider)
                    .then((result) => {
                      console.log(result);
                    })
                }
              >
                Sign in with Google
              </Button>
            )}
          </Box>
        )}
      </Layout>
    </>
  );
};

export default Home;
