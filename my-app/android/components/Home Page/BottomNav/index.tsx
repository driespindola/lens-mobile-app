import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '..';
import MailboxPage from '../../MailBoxPage';
import FriendPage from '../../FriendPage';
import UserPage from '../../UserPage';

const BottomNav = () => {

  const BottomTab = createBottomTabNavigator();

  return(
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#527862",
        tabBarInactiveTintColor: '#527862'
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
      />
      <BottomTab.Screen
        name='Friends'
        component={FriendPage}
      />
      <BottomTab.Screen
        name='Mailbox'
        component={MailboxPage}
      />
      <BottomTab.Screen
        name='User'
        component={UserPage}
      />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 65,
  },
  text: {
    fontWeight: 'bold',
    color: '#527862'
  },
  upload: {
    backgroundColor: 'white',
    borderColor: '#7CC73D',
    borderWidth: 3,
    width: 57,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    alignItems: 'center',
  }
});

export default BottomNav;