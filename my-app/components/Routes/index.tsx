import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home Page";
import MailboxPage from "../MailBoxPage";
import BottomNav from "../Home Page/BottomNav";
import TopNav from "../TopNav";


const Routes = () => {
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Bottom Nav"
          component={BottomNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes