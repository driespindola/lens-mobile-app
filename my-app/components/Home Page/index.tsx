import { StyleSheet } from 'react-native';
import * as React from 'react';
import TopNav from '../TopNav';

const Home = () => {
  
  return (
    <TopNav />
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