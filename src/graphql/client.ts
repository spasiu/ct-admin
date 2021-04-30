import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ct-admin-api.herokuapp.com/v1/graphql',
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
