import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeIcon } from 'react-native-heroicons/solid';
import { UserIcon, PlusSmallIcon, ChatBubbleLeftEllipsisIcon, UsersIcon } from 'react-native-heroicons/outline';

const BottomNav = () => {
  return(
    <View style={styles.container}>
      <View style={styles.icons}>
        <HomeIcon color='#527862' />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.icons}>
        <UsersIcon color='#527862' />
        <Text style={styles.text}>Friends</Text>
      </View>
      <View style={styles.upload}>
        <PlusSmallIcon color='#7CC73D' />
      </View>
      <View style={styles.icons}>
        <ChatBubbleLeftEllipsisIcon color='#527862' />
        <Text style={styles.text}>Mailbox</Text>
      </View>
      <View style={styles.icons}>
        <UserIcon color='#527862' />
        <Text style={styles.text}>User</Text>
      </View>
    </View>
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