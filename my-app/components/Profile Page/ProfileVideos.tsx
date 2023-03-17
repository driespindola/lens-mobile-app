import { useQuery } from '@apollo/client';
import * as React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { PaginatedPublicationResult, PublicationsDocument } from '../../types/lens';
import { Video, ResizeMode } from 'expo-av';
import { sanitizeIpfsUrl } from '../../utils/sanitizeIpfsUrl';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/getHeight';
import NoVideos from '../UI/NoVideos';

const videoWidth = WINDOW_WIDTH / 3 - 6;
const videoHeight = videoWidth * 16 / 9;

const ProfileVideos = ({ profileId }: any) => {

  const { data, loading, error } = useQuery
  <{publications: PaginatedPublicationResult}>
  ((PublicationsDocument), {
    variables: { 
      request: {
        profileId: profileId,
        publicationTypes: ["POST"],
        metadata: {
          mainContentFocus: ["VIDEO"]
        }
      }
     },
  });

  const publications = data?.publications.items

  console.log("Width", WINDOW_WIDTH)
  console.log("Height", WINDOW_HEIGHT)

  if (publications?.length === 0) {
    return(
      <NoVideos />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        contentContainerStyle={styles.listContainerStyle}
        data={publications}
        renderItem={({ item, index }) => (
          <View style={styles.videoContainer}>
            <Video
              shouldPlay={false}
              isLooping={true}
              isMuted={true}
              resizeMode={ResizeMode.CONTAIN}
              source={{
                uri: `${sanitizeIpfsUrl(item.metadata.media[0].original.url)}`
              }}
              style={styles.video}
            />
          </View>
        )}
        numColumns={3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 390
  },
  listStyle: {
    marginTop: WINDOW_HEIGHT / 16 - 1
  },
  listContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  videoContainer: {
    flex: 1,
    margin: 2,
  },
  video: {
    width: videoWidth,
    height: videoHeight,
    backgroundColor: 'black'
  },
});

export default ProfileVideos