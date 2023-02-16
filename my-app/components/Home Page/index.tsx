import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useExplorePublicationsQuery, useProfileQuery, useRecommendedProfilesQuery } from '../../types/graph';
import { Profile, PublicationMainFocus, PublicationSortCriteria, PublicationTypes } from '../../types/lens';
import { NavigationProp } from '@react-navigation/native';
import { sanitizeIpfsUrl } from '../../utils/sanitizeIpfsUrl';
import React from 'react';
import VideoPlayer from 'expo-video-player';


type HomeProps = {
  navigation: NavigationProp<Record<string, object | undefined>>;
};

const Home = ({ navigation }: HomeProps) => {
  const { data } = useExplorePublicationsQuery({
    variables: {
      request: {
        sortCriteria: PublicationSortCriteria.Latest,
        publicationTypes: [PublicationTypes.Post],
        limit: 20,
        metadata: {
          mainContentFocus: [PublicationMainFocus.Video]
        }
      }
    }
  })

  const publications = data?.explorePublications.items

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.timeline}>
        {publications?.map((publication) => (
          <>
            {publication.__typename === 'Post' && (
              <View style={{
                margin: 10
              }}>
                <VideoPlayer
                  videoProps={{
                    source: {
                      uri: `${publication.metadata.media[0].original.url}`
                    },
                  }}
                />
                <Text>{sanitizeIpfsUrl(publication.metadata.media[0].original.url)}</Text>
              </View>
            )}
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    marginHorizontal: 50,
    padding: 5
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