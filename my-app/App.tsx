import Home from "./components/Home Page";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App() {
  const client = new ApolloClient({
    uri: 'https://api-mumbai.lens.dev/',
    cache: new InMemoryCache(),
  });

  return(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}