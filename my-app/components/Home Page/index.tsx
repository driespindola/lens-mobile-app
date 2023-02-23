import { FlatList } from 'react-native';
import { ExplorePublicationResult, ExplorePublicationsDocument } from '../../types/lens';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import VideoCard from './VideoCard';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { WINDOW_HEIGHT } from '../../utils/getHeight';
import BottomNav from './BottomNav';


type HomeProps = {
  navigation: NavigationProp<Record<string, object | undefined>>;
};

const Home = ({ navigation }: HomeProps) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const { data } = useQuery<{
    explorePublications: ExplorePublicationResult;
  }>(ExplorePublicationsDocument, {
    variables: {
      request: {
        sortCriteria: 'CURATED_PROFILES',
        publicationTypes: ['POST'],
        limit: 10,
        metadata: {
          mainContentFocus: ['VIDEO']
        }
      }
    }
  })

  const publications = data?.explorePublications.items
 
  return (
    <>
      <FlatList
        data={publications}
        pagingEnabled
        renderItem={({ item, index }) => (
          <VideoCard data={item} isActive={activeVideoIndex === index} />
        )}
        onScroll={(e) => {
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - 65)
        );
        setActiveVideoIndex(index);
      }}
    />
      <BottomNav />
    </>
  );
}

export default Home