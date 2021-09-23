import { ApolloClient, InMemoryCache } from '@apollo/client';

// Define apolloclient configuration
export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});
