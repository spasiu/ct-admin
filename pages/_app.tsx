import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@config/chakra/theme';
import { ApolloProvider } from '@apollo/client';

// Global CSS files
import 'react-datepicker/dist/react-datepicker.css';

import client from 'src/graphql/client';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
