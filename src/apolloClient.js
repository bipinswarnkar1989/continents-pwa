import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

const httpUri = 'https://countries.trevorblades.com/';

const httpLink = new HttpLink({
    uri: httpUri
});

const inMemoryCache = new InMemoryCache();

export default new ApolloClient({
    link: httpLink,
    cache: inMemoryCache
});