import React from 'react';
import {
    Button,
	SafeAreaView,
	Text,
	View,
} from 'react-native';
import { useAppStore } from '../state/app';
import { useDisconnect } from '@thirdweb-dev/react-native';
import Login from './Login';


const Profile = () => {
    const currentProfile = useAppStore((state) => state.currentProfile)
    const disconnect = useDisconnect()

	return (
		<SafeAreaView>
			<View>
                {currentProfile ? (
                    <>
                        <Button
                            title={"Logout"}
                            onPress={disconnect}
                        />
                        <Text>{currentProfile.handle}</Text>
                    </>
                ):(
                    <Login />
                )}
			</View>
		</SafeAreaView>
	);
};

export default Profile