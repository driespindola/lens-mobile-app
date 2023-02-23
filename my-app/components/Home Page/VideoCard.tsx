import VideoPlayer from "expo-video-player";
import React from "react";
import { ResizeMode } from 'expo-av'
import { View, Text, StyleSheet } from "react-native";
import SidebarNav from "./SidebarNav";
import { Publication } from "../../types/lens";
import BottomNav from "./BottomNav";
import { WINDOW_HEIGHT } from "../../utils/getHeight";
import { sanitizeIpfsUrl } from "../../utils/sanitizeIpfsUrl";

interface Props {
  data: Publication
  isActive: boolean
}

const VideoCard: React.FC<Props> = ({ data, isActive }) => {
  return(
    <>
    <View
      style={[
        { height: WINDOW_HEIGHT - 45 },
      ]}
    >
      <VideoPlayer
        videoProps={{
        shouldPlay: true,
        isLooping: true,
        isMuted: true,
        resizeMode: ResizeMode.CONTAIN,
        source: {
          uri: `${sanitizeIpfsUrl(data.metadata.media[0].original.url)}`
        },
      }} 
      />
      <SidebarNav data={data as Publication} />
    </View>
      
    </>
  )
}

export default VideoCard