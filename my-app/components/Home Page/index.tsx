import { FlatList, View } from 'react-native';
import { ExplorePublicationResult, ExplorePublicationsDocument } from '../../types/lens';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { WINDOW_HEIGHT } from '../../utils/getHeight';
import BottomNav from './BottomNav';
import Description from './SidebarNav/Description';
import TopNav from '../TopNav';
import VideoCard from './ForYou/VideoCard';
import Swiper from 'react-native-swiper';
import Following from './Following';
import ForYou from './ForYou';

const Home = () => {
  return (
    <>
      <Swiper>
      <View>
        <Following />
      </View>
      <View>
        <ForYou />
      </View>
      </Swiper>
      <BottomNav />
      <TopNav />
    </>
  );
}

export default Home