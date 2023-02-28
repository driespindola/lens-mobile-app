import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from "./components/Routes";
import BottomNav from './components/Home Page/BottomNav';
import { NavProps } from './types/native';

export default function App({ navigation }: NavProps) {
  const client = new ApolloClient({
    uri: 'https://api-mumbai.lens.dev/',
    cache: new InMemoryCache(),
  });

  return(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}