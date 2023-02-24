import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MagnifyingGlassIcon, VideoCameraIcon } from "react-native-heroicons/outline";

const TopNav = () => {
    return (
      <View style={styles.container}>
        <VideoCameraIcon color='white' width={39} height={39} />
        <Text style={{
          color: 'white',
          marginLeft: 95
        }}>Following</Text>
        <Text style={{
          color: 'white',
          marginLeft: 20
        }}>For you</Text>
        <MagnifyingGlassIcon color='white' width={39} height={39} style={{ marginLeft: 95 }} />
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