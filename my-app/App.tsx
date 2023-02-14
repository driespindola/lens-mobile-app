import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home Page";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./components/Profile Page";
import ProfileScreen from "./components/Profile Page";

export default function App() {
  const client = new ApolloClient({
    uri: 'https://api-mumbai.lens.dev/',
    cache: new InMemoryCache(),
  });

  const Stack = createNativeStackNavigator();

  return(
    <ApolloProvider client={client}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}