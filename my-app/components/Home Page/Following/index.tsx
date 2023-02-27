import { View, ScrollView, Text, Image } from "react-native";
import { useExploreProfilesQuery, useRecommendedProfilesQuery } from "../../../types/graph";
import getAvatar from "../../../utils/getAvatar";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utils/getHeight";
import { MutableRefObject } from "react";
import Swiper from "react-native-swiper";
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
        <View
          style={{
            width: WINDOW_WIDTH,
            height: WINDOW_HEIGHT,
            backgroundColor: '#527862'
          }}
        >
          <Text
            style={{
              color: 'white',
              marginTop: 162,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Popular Creators
          </Text>
          <Text
            style={{
              color: 'white',
              marginTop: 10,
              fontSize: 16,
              textAlign: 'center'
            }}
          >
            Follow a profile to see their recent videos
          </Text>
            <View
              style={{
                marginTop: 61,
                marginBottom: 110,
              }}
            >
              {profiles?.map((profile) => (
                <>
                  {profile.isDefault === true && (
                    <View 
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10
                      }}
                    >
                      <Image
                        source={{ uri: `${getAvatar(profile)}` }}
                        style={{
                          width: 95,
                          height: 95,
                          marginHorizontal: 20,
                          marginTop: 12,
                          borderRadius: 50
                        }}
                      />
                      <View>
                        <View
                         style={{
                          flexDirection: 'row'
                         }}
                        >
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            alignItems: 'center'
                          }}
                        >
                          {profile.name}
                        </Text>
                        <Text
                         style={{
                          fontSize: 12,
                          color: 'white',
                          marginLeft: 3
                         }}
                        >@{profile.handle}</Text>
                        </View>
                        <Text
                          style={{
                            width: 230,
                            fontSize: 12,
                            color: '#D2D2D2',
                            marginTop: 3
                          }}
                        >{profile.bio}</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#7CC73D',
                          padding: 3,
                          borderRadius: 5
                        }}
                      >
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
  
export default Following
