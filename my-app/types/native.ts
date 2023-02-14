import { RouteProp } from "@react-navigation/native";
import { Profile } from "./lens";

export type RootStackParamList = {
    Home: undefined;
    Profile: { profile: Profile };
};

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;