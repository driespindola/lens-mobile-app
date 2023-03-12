import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Button from "../UI/Button";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

export default function WalletConnectExperience() {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <>
      {!connector.connected ? (
        <Button width={250} height={45} marginTop={25} text="Connect" onPress={connectWallet} />
      ) : (
        <>
          <Text>{shortenAddress(connector.accounts[0])}</Text>
          <Button width={250} height={45} marginTop={25} text="Log Out" onPress={killSession} />
        </>
      )}
    </>
  );
}