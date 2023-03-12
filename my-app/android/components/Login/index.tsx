import React from "react";
import { View, Text } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils/getHeight";
import { useAppStore } from "../store/app";
import Button from "../UI/Button";
import WalletConnectExperience from "./WalletConnectExperience";

const LoginScreen = () => {
  
  return (
    <View
        style={{
            width: WINDOW_WIDTH,
            height: WINDOW_HEIGHT,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            padding: 'auto'
        }}
    >
        <Text>Connect Your Wallet</Text>
        <WalletConnectExperience />
    </View>
  );
};

export default LoginScreen