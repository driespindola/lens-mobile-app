import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { useRecommendedProfilesQuery } from '../../types/graph';
import getAvatar from '../../utils/getAvatar';

const Home = () => {
  const { data, loading, error } = useRecommendedProfilesQuery({
    variables: {
      options: {
        shuffle: false
      }
    }
  })

  const profiles = data?.recommendedProfiles
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {profiles?.map((profile) => (
          <View style={styles.items}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: `${getAvatar(profile)}`,
              }}
            />
            <View style={styles.itemsContainer}>
              <Text key={profile?.id} style={{
                fontWeight: 'bold'
              }}>{profile.handle}</Text>
              <View style={styles.followContainer}>
                <Text style={styles.followers}>{profile.stats.totalFollowers} followers</Text>
                <Text>{profile.stats.totalFollowing} following</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 100,
    marginHorizontal: 50,
  },
  items: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
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