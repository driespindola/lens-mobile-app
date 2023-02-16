import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useProfileQuery, usePublicationsQuery } from '../../types/graph'
import { Profile, PublicationTypes } from '../../types/lens'

interface Props {
    profile: Profile
}

const Publications: React.FC<Props> = ({ profile }) => {

  return(
    <View style={styles.container}>
        <Text>{profile?.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginHorizontal: 50,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    name: {
      flexDirection: 'column',
      marginLeft: 5,
    },
    tinyLogo: {
      width: 100,
      height: 100,
      borderRadius: 50
    },
});

export default Publications