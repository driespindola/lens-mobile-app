import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { EllipsisVerticalIcon, ArrowLeftIcon } from "react-native-heroicons/solid";

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
        <ArrowLeftIcon color='#527862' width={24} height={24} />
        </TouchableOpacity>
        <Text style={{ 
          fontSize: 16,
          fontWeight: 'bold',
          color: '#527862' 
        }}>{profileName}</Text>
        <EllipsisVerticalIcon color='#527862' width={20} height={24}/>
    </View>
  )
}

export default ProfileHeader