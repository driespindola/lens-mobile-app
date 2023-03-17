import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils/getHeight";
import { useRecommendedProfilesQuery } from "../../types/graph";
import getAvatar from "../../utils/getAvatar";

const MailboxPage = ({ navigation }: any) => {
  const { data } = useRecommendedProfilesQuery({
    variables: {
      options: {
        shuffle: true
      }
    }
  })

  const profiles = data?.recommendedProfiles.slice(0, 3)
  
    return (
      <View
        style={{
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT,
          backgroundColor: '#527862',
          paddingTop: WINDOW_HEIGHT - 812
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: WINDOW_WIDTH - 391,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Mailbox
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 33,
            marginLeft: 16
          }}
        >
          Activity
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 215,
            marginLeft: 16
          }}
        >
          Messages
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 154,
            marginLeft: 16,
          }}
        >
          Suggested Accounts
        </Text>
        <View
          style={{
            marginTop: 31,
            marginBottom: 27
          }}
        >
          {profiles?.map((profile) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 16,
                marginBottom: 18
              }}
            >
              <Image
                source={{ uri: `${getAvatar(profile)}` }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50
                }}
              />
              <View
                style={{
                  marginLeft: 11,
                  width: 201
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile', { profileId: profile.id })}
                >
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {profile.name === null ? 'Untitled' : profile.name}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'white'
                  }}
                >
                  @{profile.handle}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#7CC73D',
                  width: 89,
                  height: 29,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 'auto',
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  Follow
                </Text>
              </View>
            </View>
            ))}
        </View>
      </View>
    );
  };

export default MailboxPage