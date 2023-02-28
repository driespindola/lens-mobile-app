import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Profile } from "./lens";

export type RootStackParamList = {
    Home: undefined;
    Profile: { profile: any };
};

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

export type NavProps = {
    navigation: NavigationProp<Record<string, object | undefined>>;
};