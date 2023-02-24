import React from "react"
import { Publication } from "../../../types/lens"
import { View, Text, StyleSheet } from "react-native"

interface Props {
    data: Publication
  }
  
  const Description: React.FC<Props> = ({ data }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.profile}>{data.profile.handle}</Text>
            <Text style={styles.description}>{data.metadata.description.slice(0, 140)}</Text>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: 17,
      bottom: 60,
    },
    profile: {
      color: 'white',
      fontWeight: 'bold'
    },
    description: {
      color: 'white',
      marginTop: 13,
      maxWidth: 320,
    }
});

  export default Description