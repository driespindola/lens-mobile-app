import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Publication } from "../../../types/lens";
import getAvatar from "../../../utils/getAvatar";
import { ArrowsRightLeftIcon, ChatBubbleOvalLeftEllipsisIcon, FolderPlusIcon, HeartIcon, PlusCircleIcon } from "react-native-heroicons/solid";

interface Props {
  data: Publication
}

const SidebarNav: React.FC<Props> = ({ data }) => {
  return(
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{
                uri: `${getAvatar(data.profile)}`,
            }}
          />
          <View
            style={{
              position: 'absolute',
              left: 20,
              top: 52,
              backgroundColor: 'white',
              borderRadius: 50
            }}
          >
            <PlusCircleIcon color='#7CC73D'/>
          </View>
        </View>
      
        <View style={styles.items}>
          <HeartIcon color='white' width={42} height={41} />
          <Text style={styles.text}>{data.stats.totalUpvotes}</Text>
        </View>
        <View style={styles.items}>
          <ChatBubbleOvalLeftEllipsisIcon color='white' width={42} height={43} />
          <Text style={styles.text}>{data.stats.totalAmountOfComments}</Text>
        </View>
        <View style={styles.items}>
          <FolderPlusIcon color='white' width={43} height={43}/>
          <Text style={styles.text}>{data.stats.totalAmountOfCollects}</Text>
        </View>
        <View style={styles.items}>
          <ArrowsRightLeftIcon color='white' width={42} height={43} />
          <Text style={styles.text}>{data.stats.totalAmountOfMirrors}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: "absolute",
      right: 8,
      bottom: 72,
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontWeight: 'bold'
    },
    avatar: {
      width: 65,
      height: 65,
      borderRadius: 50,
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: 2,
      marginBottom: 11
    },
    items: {
      marginTop: 20,
      alignItems: 'center'
    }
});

export default SidebarNav