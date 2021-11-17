import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink,
  NormalizedCacheObject,
  ApolloLink,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const getHttpLink = () =>
  new HttpLink({
    uri: 'https://' + process.env.NEXT_PUBLIC_GRAPHQL_API,
  });

const getHeaders = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

let wsClient: SubscriptionClient;

const getWsLink = (token: string) => {
  if (process.browser) {
    wsClient = new SubscriptionClient(
      'wss://' + process.env.NEXT_PUBLIC_GRAPHQL_API,
      {
        reconnect: true,
        connectionParams: () => {
          return getHeaders(token);
        },
      },
    );
    return new WebSocketLink(wsClient);
  }
  return {} as ApolloLink;
};

const authLink = (token: string) => {
  return setContext(() => {
    return getHeaders(token);
  });
};

const getLink = (token: string) => {
  return ApolloLink.from([
    authLink(token),
    process.browser
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === 'OperationDefinition' &&
              definition.operation === 'subscription'
            );
          },
          getWsLink(token),
          getHttpLink(),
        )
      : getHttpLink(),
  ]);
};

export const getClient = (
  token: string,
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: getLink(token),
    cache: new InMemoryCache({ addTypename: false }),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};
