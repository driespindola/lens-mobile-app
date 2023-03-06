import { useQuery } from "@apollo/client";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProfileDocument } from "../../types/lens";
import getAvatar from "../../utils/getAvatar";
import ProfileVideos from "./ProfileVideos";

const ProfileScreen  = ({ route, navigation }: any) => {  
  const profileId = route.params;

  const { data, loading, error } = useQuery
  (ProfileDocument, {
    variables: { 
      request: {
        profileId: profileId.profileId,
      }
    },
  });
  
  const profile = data?.profile

  return (
    <View>
      <Image 
        source={{ uri: `${getAvatar(profile)}` }}
        style={styles.image}
      />
      <Text style={styles.handle}>@{profile?.handle}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statsAlign}>
          <Text style={styles.statsNumber}>{profile?.stats.totalFollowing}</Text>
          <Text style={styles.stats}>Follow</Text>
        </View>
        <View style={styles.statsAlign}>
          <Text style={styles.statsNumber}>{profile?.stats.totalFollowers}</Text>
          <Text style={styles.stats}>Followers</Text>
        </View>
        <View style={styles.statsAlign}>
          <Text style={styles.statsNumber}>{profile?.stats.totalPosts}</Text>
          <Text style={styles.stats}>Posts</Text>
        </View>
      </View>
      <View style={styles.followButton}>
        <Text style={styles.followText}>
          Follow
        </Text>
      </View>
      <Text style={styles.bio}>{profile?.bio}</Text>
      <ProfileVideos profileId={profile?.id} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginVertical: 100,
      marginHorizontal: 50,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginTop: 62,
      marginLeft: 154,
      marginRight: 157
    },
    handle: {
      fontSize: 15,
      fontWeight: '500',
      color: '#527862',
      textAlign: 'center',
      marginTop: 6
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 16,
      marginLeft: 21,
      marginRight: 39
    },
    statsAlign: {
      alignItems: 'center'
    },
    statsNumber: {
      fontSize: 15,
      fontWeight: '700',
      color: '#527862'
    },
    stats: {
      fontSize: 13,
      fontWeight: '500',
      color: '#AEAEAE'
    },
    followButton: {
      backgroundColor: '#7CC73D',
      width: 164,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'auto',
      marginTop: 13,
      marginLeft: 31
    },
    followText: {
      fontWeight: 'bold',
      color: 'white'
    },
    bio: {
      height: 87,
      fontSize: 14,
      textAlign: 'center',
      marginTop: 11
    }
});

export default ProfileScreen