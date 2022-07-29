import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.1.10/:3000/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
