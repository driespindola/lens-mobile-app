import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home Page";
import MailboxPage from "../MailBoxPage";
import BottomNav from "../Home Page/BottomNav";
import TopNav from "../TopNav";
import ProfileScreen from "../Profile Page";


const Routes = () => {
  const Stack = createNativeStackNavigator();

  return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Bottom Nav"
          component={BottomNav}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
  )
}

export default Routes