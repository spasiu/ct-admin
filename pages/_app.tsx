import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@config/chakra/theme';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useAuthState } from 'react-firebase-hooks/auth';

// Global CSS files
import 'react-datepicker/dist/react-datepicker.css';
import 'react-image-lightbox/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { auth } from '@config/firebase';
import { getClient } from 'src/graphql/client';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [token, setToken] = useState('');
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      user.getIdToken(true).then((token) => {
        setToken(token);
      });
    } else if (!loading && !user) {
      if (router.pathname !== '/') {
        router.push('/');
      }
    }
  }, [user, router]);

  useEffect(() => {
    if (!user && !loading && router.pathname !== '/') {
      router.push('/');
    }
  }, [router]);

  const client = getClient(token);
  
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
