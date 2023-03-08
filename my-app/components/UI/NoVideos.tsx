import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/getHeight';

const NoVideos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.warning}>This user has no videos yet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 390
  },
  warning: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#527862'
  }
});

export default NoVideos