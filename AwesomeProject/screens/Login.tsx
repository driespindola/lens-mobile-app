import {
	ConnectWallet,
	useAddress,
	useDisconnect,
	useWallet,
} from '@thirdweb-dev/react-native';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	TouchableHighlight,
	Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useAuthenticateMutation, useGetChallengeLazyQuery } from '../src/types/graph';


const Login = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const textStyles = {
		color: isDarkMode ? Colors.white : Colors.black,
		...styles.heading,
	};

	const disconnect = useDisconnect()

	const address = useAddress();
	const wallet = useWallet();

	const [loadChallenge] = useGetChallengeLazyQuery()

	const [authenticate] = useAuthenticateMutation()

	const signIn = async () => {
		try {
			const challenge = await loadChallenge({
				variables: {
					request: {
						address: address
					}
				}
			});
	
			if (!challenge?.data?.challenge?.text) {
				console.log("Something Went Wrong");
				return;
			}
	
			const signature = await wallet?.signMessage(challenge.data?.challenge.text);

			console.log(challenge.data.challenge.text)
	
			const auth = await authenticate({
				variables: { request: { address, signature } }
			});
	
			if (auth) {
				console.log("Success");
			} else {
				console.log("Error");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<View style={styles.view}>
				<Text style={textStyles}>React Native thirdweb starter</Text>
				{!address && <ConnectWallet />}
				{address && (
					<>
						<Button
      						title={"Sign In with Lens"}
      						onPress={signIn}
    					/>
						<Button
      						title={"Logout"}
      						onPress={disconnect}
    					/>
					</>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	view: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
});

export default Login