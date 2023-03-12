import "./global";
import * as React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from "./components/Routes";
import { NavProps } from './types/native';
import { NavigationContainer } from '@react-navigation/native';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App({ navigation }: NavProps) {
  const SCHEME_FROM_APP_JSON = "walletconnect-example";

  const client = new ApolloClient({
    uri: 'https://api-mumbai.lens.dev/',
    cache: new InMemoryCache(),
  });

  return(
    <ApolloProvider client={client}>
      <WalletConnectProvider
        redirectUrl={
          Platform.OS === "web"
            ? window.location.origin
            : `${SCHEME_FROM_APP_JSON}://`
        }
        storageOptions={{
          asyncStorage: AsyncStorage,
        }}
      >
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </WalletConnectProvider>
    </ApolloProvider>
  )
}