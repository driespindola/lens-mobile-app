import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
    profileName: string | null | undefined;
}

const ProfileHeader: React.FC<Props> = ({ profileName }) => {

    const navigation = useNavigation();

  return(
    <View style={{ 
      marginTop: 22,
      marginHorizontal: 17,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        
        </TouchableOpacity>
        <Text style={{ 
          fontSize: 16,
          fontWeight: 'bold',
          color: '#527862' 
        }}>{profileName}</Text>
        
    </View>
  )
}

export default ProfileHeader