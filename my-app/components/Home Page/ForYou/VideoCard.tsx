import VideoPlayer from "expo-video-player";
import React from "react";
import { ResizeMode } from 'expo-av'
import { View, Text, StyleSheet } from "react-native";
import { Publication } from "../../../types/lens";
import { WINDOW_HEIGHT } from "../../../utils/getHeight";
import { sanitizeIpfsUrl } from "../../../utils/sanitizeIpfsUrl";
import SidebarNav from "../SidebarNav";
import Description from "../SidebarNav/Description";


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
      <Description data={data as Publication} />
      <SidebarNav data={data as Publication} />
    </View>
    </>
  )
}

export default VideoCard