/* eslint-disable no-undef */
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';

export const wsLink = new WebSocketLink({
  uri:
    process.env.REACT_APP_SUBSCRIPTIONS_URL ||
    'ws://localhost:4000/subscriptions',
  options: {
    reconnect: false,
  },
});

export const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL || 'http://localhost:4000/',
  credentials: 'include',
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
export const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
