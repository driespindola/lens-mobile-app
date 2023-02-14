import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRecommendedProfilesQuery } from '../../types/graph';
import getAvatar from '../../utils/getAvatar';
import { Profile } from '../../types/lens';
import { NavigationProp } from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<Record<string, object | undefined>>;
};

const Home = ({ navigation }: HomeProps) => {
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
              <TouchableOpacity onPress={() => navigation.navigate('Profile', { profile: profile as Profile })}>
                <Text key={profile?.handle} style={{
                  fontWeight: 'bold'
                }}>{profile.handle}</Text>
                <View style={styles.followContainer}>
                  <Text style={styles.followers}>{profile.stats.totalFollowers} followers</Text>
                  <Text>{profile.stats.totalFollowing} following</Text>
                </View>
              </TouchableOpacity>
              
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
    padding: 5
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