import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { ChatBubbleLeftEllipsisIcon, HomeIcon, UserIcon, UsersIcon } from 'react-native-heroicons/solid';
import { HomeIcon as HomeIconOutline, UserIcon as UserIconOutline, PlusSmallIcon as PlusSmallIconOutline, ChatBubbleLeftEllipsisIcon as ChatBubbleLeftEllipsisIconOutline, UsersIcon as UsersIconOutline } from 'react-native-heroicons/outline';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavProps } from '../../../types/native';
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
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <HomeIcon color="#527862" /> : <HomeIconOutline color="#527862" />
          ),
        }}
      />
      <BottomTab.Screen
        name='Friends'
        component={FriendPage}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <UserIcon color="#527862" /> : <UserIconOutline color="#527862" />
          ),
        }}
      />
      <BottomTab.Screen
        name='Mailbox'
        component={MailboxPage}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <ChatBubbleLeftEllipsisIcon color="#527862" /> : <ChatBubbleLeftEllipsisIconOutline color="#527862" />
          ),
        }}
      />
      <BottomTab.Screen
        name='User'
        component={UserPage}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <UsersIcon color="#527862" /> : <UsersIconOutline color="#527862" />
          ),
        }}
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
    borderStyle: 'solid',
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