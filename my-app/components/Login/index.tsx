import React from "react";
import { View, Text } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils/getHeight";
import { useAppStore } from "../store/app";
import Button from "../UI/Button";

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
        <Button width={250} height={45} marginTop={25} text="Connect" />
    </View>
  );
};

export default LoginScreen