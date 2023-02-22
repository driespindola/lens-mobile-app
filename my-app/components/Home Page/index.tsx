import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useExplorePublicationsQuery, useProfileQuery, useRecommendedProfilesQuery } from '../../types/graph';
import { Profile, Publication, PublicationMainFocus, PublicationSortCriteria, PublicationTypes } from '../../types/lens';
import { NavigationProp } from '@react-navigation/native';
import { sanitizeIpfsUrl } from '../../utils/sanitizeIpfsUrl';
import React from 'react';
import VideoPlayer from 'expo-video-player';
import { ResizeMode } from 'expo-av'
import BottomNav from './BottomNav';


type HomeProps = {
  navigation: NavigationProp<Record<string, object | undefined>>;
};

const Home = ({ navigation }: HomeProps) => {
  const { data } = useExplorePublicationsQuery({
    variables: {
      request: {
        sortCriteria: PublicationSortCriteria.CuratedProfiles,
        publicationTypes: [PublicationTypes.Post],
        limit: 10,
        metadata: {
          mainContentFocus: [PublicationMainFocus.Video]
        }
      }
    }
  })

  const publications = data?.explorePublications.items

  const Item = ({ item: publication }: { item: Publication }) => (
    <View style={{
      height: 800
    }}>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          isLooping: true,
          isMuted: true,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: `${publication.metadata.media[0].original.url}`
          },
        }}
      />
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={publications}
          renderItem={Item}
          pagingEnabled={true}
          keyExtractor={item => item.id} 
        />
      </SafeAreaView>
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 800,
  },
  timeline: {
    backgroundColor: '#fff',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemsContainer: {
    marginLeft: 10
  },
  followContainer: {
    flexDirection: 'row'
  },
  followers: {
    marginRight: 5
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
});

export default Home