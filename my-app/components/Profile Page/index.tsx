import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileScreenRouteProp, RootStackParamList } from "../../types/native";
import { Profile } from "../../types/lens";
import getAvatar from "../../utils/getAvatar";

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile">;

type ProfileProps = {
    navigation: ProfileScreenNavigationProp;
    route: { 
        params: Readonly<{ profile: Profile }>,
    };
};

const ProfilePage: React.FC<ProfileProps> = ({ route, navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
              uri: `${getAvatar(route.params.profile)}`,
          }}
        />
        <View style={styles.name}>
          <Text style={{fontWeight: 'bold'}}>{route.params?.profile?.name}</Text>
          <Text>{route.params.profile.handle}</Text>
        </View>
      </View>
    </View>
  );
};

export default function ProfileScreen() {
  const route = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return <ProfilePage route={route} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginVertical: 100,
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
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 50
    },
});