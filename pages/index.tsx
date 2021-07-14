import React from 'react';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, functions } from '@config/firebase';
import { Box, Button } from '@chakra-ui/react';

import Layout from '@layouts';
import SEO from '@components/SEO';

const Home: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const createCheckout = functions.httpsCallable('createCheckout');
  const addItem = functions.httpsCallable('addItem');
  const removeItem = functions.httpsCallable('removeItem');
  const getCheckout = functions.httpsCallable('getCheckout');
  const updateItem = functions.httpsCallable('updateItem');

  // createCheckout({
  //   products: [{ product_id: 112, quantity: 1 }],
  //   first_name: 'Vedran',
  //   last_name: 'Sisic',
  //   address: {
  //     line1: '76 shuter st',
  //     line2: '1001',
  //     city: 'Toronto',
  //     state_province_region: 'Ontario',
  //     country: 'CA',
  //     postal_code: 'M5B1B4',
  //   },
  // });

  // getCheckout({
  //   cartId: 'fcc2ca7c-de3a-4bb7-82e3-e807792dec63',
  // });

  // addItem({
  //   cartId: 'fcc2ca7c-de3a-4bb7-82e3-e807792dec63',
  //   products: [{ product_id: 119, quantity: 1 }],
  // });

  // removeItem({
  //   cartId: 'fcc2ca7c-de3a-4bb7-82e3-e807792dec63',
  //   itemId: 'f894ae37-e0d0-4154-92bf-88e5e2e8b31d',
  // });

  // updateItem({
  //   cartId: 'fcc2ca7c-de3a-4bb7-82e3-e807792dec63',
  //   itemId: '6e1d4969-ba58-4df6-8142-da6ef3fcae9b',
  //   item: { product_id: 119, quantity: 1 },
  // });

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
