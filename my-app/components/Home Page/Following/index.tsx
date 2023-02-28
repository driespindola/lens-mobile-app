import { View, StyleSheet, Text, Image } from "react-native";
import { useExploreProfilesQuery } from "../../../types/graph";
import getAvatar from "../../../utils/getAvatar";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utils/getHeight";
import { ProfileSortCriteria } from "../../../types/lens";
import { PlusIcon } from "react-native-heroicons/solid";

const Following = () => {
    
  const { data } = useExploreProfilesQuery({
        variables: {
            request: {
              sortCriteria: ProfileSortCriteria.MostFollowers,
              limit: 11
            }
        }
    })

    const profiles = data?.exploreProfiles.items
    
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>
            Popular Creators
          </Text>
          <Text style={styles.paragraph}>
            Follow a profile to see their recent videos
          </Text>
            <View style={styles.profiles}>
              {profiles?.map((profile) => (
                <>
                  {profile.isDefault === true && (
                    <View style={styles.profilesContainer}>
                      <Image
                        source={{ uri: `${getAvatar(profile)}` }}
                        style={styles.profilesPicture}
                      />
                      <View>
                        <View
                         style={{
                          flexDirection: 'row'
                         }}
                        >
                        <Text style={styles.profilesName}>
                          {profile.name}
                        </Text>
                        <Text
                         style={styles.profilesHandle}
                        >@{profile.handle}</Text>
                        </View>
                        <Text style={styles.profilesBio}>
                          {profile.bio}
                        </Text>
                      </View>
                      <View style={styles.followButton}>
                        <PlusIcon color='white' />
                      </View>
                    </View>
                  )}
                </>
              ))}
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT,
      backgroundColor: '#527862'
    },
    heading: {
      color: 'white',
      marginTop: 162,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    paragraph: {
      color: 'white',
      marginTop: 10,
      fontSize: 16,
      textAlign: 'center'
    },
    profiles: {
      marginTop: 61,
      marginBottom: 110,
    },
    profilesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10
    },
    profilesPicture: {
      width: 95,
      height: 95,
      marginHorizontal: 20,
      marginTop: 12,
      borderRadius: 50
    },
    profilesName: {
      fontWeight: 'bold',
      color: 'white',
      alignItems: 'center'
    },
    profilesHandle: {
      fontSize: 12,
      color: 'white',
      marginLeft: 3
    },
    profilesBio: {
      width: 230,
      fontSize: 12,
      color: '#D2D2D2',
      marginTop: 3
    },
    followButton: {
      backgroundColor: '#7CC73D',
      padding: 3,
      borderRadius: 5
    }
  });
  
export default Following
