import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import ForYou from "../Home Page/ForYou";
import Following from "../Home Page/Following";

const TopNav = () => {
  
  const TopTab = createMaterialTopTabNavigator()

    return (
      <TopTab.Navigator
        initialRouteName="For You" 
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: 'capitalize', 
            color: 'white',
            fontSize: 16 
          },
          tabBarIndicatorStyle: {
            width: 31,
            height: 5,
            backgroundColor: 'white',
            marginLeft: 36
          },
          tabBarStyle: {
            backgroundColor: 'none',
            position: 'absolute',
            left: 100,
            right: 100,
            top: 62,
          },
        }}
      >
        <TopTab.Screen name="Following" component={Following} />
        <TopTab.Screen name="For You" component={ForYou} />
      </TopTab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 62,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
  
  export default TopNav