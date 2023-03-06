import { useQuery } from '@apollo/client';
import React from 'react'
import { View, Image, FlatList } from 'react-native'
import { PaginatedPublicationResult, PublicationsDocument } from '../../types/lens';
import getAvatar from '../../utils/getAvatar';
import Video from 'react-native-video';

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

  return (
    <View>
      <FlatList
        style={{
          marginTop: 51
        }}
        data={publications}
        renderItem={({ item, index }) => (
          <Video 
            source={{
              uri: `${getAvatar(item.metadata.cover)}`
            }}
            style={{
              width: 137,
              height: 181
            }}
          />
        )}
        numColumns={3}
      />
    </View>
  )
}

export default ProfileVideos