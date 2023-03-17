import * as React from 'react'
import { View, Text, Pressable } from "react-native";

interface Props {
  width: number,
  height: number,
  marginTop?: number,
  marginLeft?: number,
  text: string,
  onPress: () => void
}

const Button: React.FC<Props>  = ({
    width,
    height,
    marginTop,
    marginLeft,
    text,
    onPress
 }) => {  
  return (
    <Pressable style={{
      backgroundColor: '#7CC73D',
      width: width,
      height: height,
      justifyContent: "center",
      alignItems: "center",
      padding: "auto",
      marginTop: marginTop,
      marginLeft: marginLeft
    }}
      onPress={onPress}
    >
        <Text style={{
          fontWeight: 'bold',
          color: 'white'
        }}>
          {text}
        </Text>
    </Pressable>
  );
};

export default Button