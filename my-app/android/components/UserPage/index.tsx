import * as React from "react";
import { View, Text } from "react-native";
import LoginScreen from "../Login";
import { useAppStore } from "../store/app";

const UserPage = () => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  
  if(!currentProfile) {
    return(
      <LoginScreen />
    )
  }

  return (
    <View>
        <Text>Users</Text>
    </View>
  );
};

export default UserPage