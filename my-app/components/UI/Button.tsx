import { View, Text } from "react-native";

interface Props {
    width: number,
    height: number,
    marginTop?: number,
    marginLeft?: number,
    text: string
}

const Button: React.FC<Props>  = ({
    width,
    height,
    marginTop,
    marginLeft,
    text
 }) => {  
  return (
    <View style={{
        backgroundColor: '#7CC73D',
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        padding: "auto",
        marginTop: marginTop,
        marginLeft: marginLeft
    }}>
        <Text style={{
            fontWeight: 'bold',
            color: 'white'
        }}>
          {text}
        </Text>
    </View>
  );
};

export default Button