import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MagnifyingGlassIcon, VideoCameraIcon } from "react-native-heroicons/outline";

const TopNav = () => {
    return (
      <View style={styles.container}>
        <VideoCameraIcon color='white' width={39} height={39} />
        <MagnifyingGlassIcon color='white' width={39} height={39} style={{ marginLeft: 330 }} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 62,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
  
  export default TopNav