import { View, Text } from "react-native";
import { useRecommendedProfilesQuery } from "../../../types/graph";

const Following = () => {
    const { data } = useRecommendedProfilesQuery({
        variables: {
            options: {
                shuffle: true
            }
        }
    })

    const profiles = data?.recommendedProfiles
    
    return (
        <View>
            {profiles?.map((profile) => (
                <Text>{profile.handle}</Text>
            ))}
        </View>
    );
  }
  
export default Following