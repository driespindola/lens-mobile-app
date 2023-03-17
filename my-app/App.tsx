import "./global";
import {LensConfig, LensProvider, staging, IBindings, IStorageProvider} from '@lens-protocol/react';
import {MMKV} from 'react-native-mmkv';
import {providers, Wallet} from 'ethers';
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

  const provider = new providers.InfuraProvider('maticmum');

  const testWalletPrivateKey = '6c434da5e5c0e3a8e0db5cf835d23e04c7592037854f0700c26836be7581c68c';

  const wallet = new Wallet(testWalletPrivateKey, provider);

  function bindings(): IBindings {
    return {
      getProvider: async () => provider,
      getSigner: async () => wallet,
    };
  }

  class MmkvStorageProvider implements IStorageProvider {
    private readonly storage;
  
    constructor() {
      this.storage = new MMKV({id: 'lens-sdk-storage'});
    }
  
    async getItem(key: string) {
      const result = await this.storage.getString(key);
  
      return result ?? null;
    }
  
    setItem(key: string, value: string) {
      this.storage.set(key, value);
    }
  
    removeItem(key: string) {
      this.storage.delete(key);
    }
  }
  
  function mmkvStorageProvider(): IStorageProvider {
    return new MmkvStorageProvider();
  }

  const client = new ApolloClient({
    uri: 'https://api-mumbai.lens.dev/',
    cache: new InMemoryCache(),
  });

  const lensConfig: LensConfig = {
    bindings: bindings(),
    environment: staging,
    storage: mmkvStorageProvider(),
  };

  return(
    <ApolloProvider client={client}>
      <LensProvider config={lensConfig}>
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
      </LensProvider>
    </ApolloProvider>
  )
}