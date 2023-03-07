import { useQuery } from '@apollo/client';
import React from 'react'
import { View, Image, FlatList, Text, Dimensions } from 'react-native'
import { PaginatedPublicationResult, PublicationsDocument } from '../../types/lens';
import getAvatar from '../../utils/getAvatar';
import { Video, ResizeMode } from 'expo-av';
import { sanitizeIpfsUrl } from '../../utils/sanitizeIpfsUrl';
import VideoPlayer from 'expo-video-player';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/getHeight';

const ProfileVideos = ({ profileId }: any) => {

  const videoWidth = Dimensions.get('window').width / 3 - 6;
  const videoHeight = videoWidth * 16 / 9;

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

  return (
    <View
      style={{
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT - 390
      }}
    >
      <FlatList
        style={{
          marginTop: 51
        }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center'
        }}
        data={publications}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              margin: 2,
            }}
          >
            <Video
              shouldPlay={false}
              isLooping={true}
              isMuted={true}
              resizeMode={ResizeMode.CONTAIN}
              source={{
                uri: `${sanitizeIpfsUrl(item.metadata.media[0].original.url)}`
              }}
              style={{
                width: videoWidth,
                height: videoHeight,
                backgroundColor: 'black'
              }}
            />
          </View>
        )}
        numColumns={3}
      />
    </View>
  )
}

export default ProfileVideos