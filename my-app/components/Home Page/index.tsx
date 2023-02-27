import { View, Text, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import BottomNav from './BottomNav';
import TopNav from '../TopNav';
import Swiper from 'react-native-swiper';
import Following from './Following';
import ForYou from './ForYou';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/getHeight';


const renderPagination = ( index: number, total: number ) => {
  const words = ['Following', 'For You']

  return (
    <View style={styles.wrapper}>
      {words.map((word, i) => (
        <Text style={{ 
          color: 'white',
          fontSize: 20, 
          fontWeight: index === i ? 'bold' : 'normal' }}>
          {word}
          {i === total - 1 ? '' : '   '}
        </Text>
      ))}
    </View>
  )
}

const Home = () => {
  
  return (
    <View
      style={{
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        flex: 1
      }}
    >
      <Swiper
        index={1}
        loop={false}
        renderPagination={renderPagination}
      >
        <View>
          <Following  />
        </View>
        <View>
          <ForYou />
        </View>
      </Swiper>
      <BottomNav />
      <TopNav />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    left:  110,
    top: 66
  }
});

export default Home;