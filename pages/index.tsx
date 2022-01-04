import React from 'react';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, app } from '@config/firebase';
import { Box, Button } from '@chakra-ui/react';

import Layout from '@layouts';
import SEO from '@components/SEO';

import 'firebaseui/dist/firebaseui.css';
import FirebaseAuth  from '../src/components/FirebaseAuth';

/**
 * TODO: Watch for auth state change to update claims
 *
 */
const Home: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    credentialHelper: "none",
  };

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
              <FirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
            )}
          </Box>
        )}
      </Layout>
    </>
  );
};

export default Home;
