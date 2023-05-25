import {
	ConnectWallet,
	metamaskWallet,
	useAddress,
	useChainId,
	useConnect,
	useDisconnect,
	useSwitchChain,
	useWallet,
} from '@thirdweb-dev/react-native';
import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useAuthenticateMutation, useGetChallengeLazyQuery, useProfilesLazyQuery } from '../types/graph';
import { useAppPersistStore, useAppStore } from '../state/app';
import { Mumbai } from '@thirdweb-dev/chains';


const Login = () => {
	const backgroundStyle = {
		backgroundColor: Colors.lighter,
	};

	const textStyles = {
		color: Colors.black,
		...styles.heading,
	};

	const metamaskConfig = metamaskWallet();

	const connect = useConnect();
	const disconnect = useDisconnect();
	const chainId = useChainId()

	console.log(chainId)

	const address = useAddress();
	const wallet = useWallet();
	const switchChain = useSwitchChain();

	const [loadChallenge] = useGetChallengeLazyQuery()
	const [authenticate] = useAuthenticateMutation()
	const [loadProfiles] = useProfilesLazyQuery()

	const setProfiles = useAppStore((state) => state.setProfiles);
  	const setCurrentProfile = useAppStore((state) => state.setCurrentProfile);
  	const setProfileId = useAppPersistStore((state) => state.setProfileId);
	const currentProfile = useAppStore((state) => state.currentProfile)

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
	
			const { data: profilesData } = await loadProfiles({
				variables: { request: { ownedBy: [address] } }
			})

			const profiles: any = profilesData?.profiles?.items
          		?.slice()
          		?.sort((a, b) => Number(a.id) - Number(b.id))
          		?.sort((a, b) =>
            	a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1
          	);

			const getCurrentProfile = profiles[0]
			setProfiles(profiles)
			setCurrentProfile(getCurrentProfile)
			setProfileId(getCurrentProfile.id)

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<View style={styles.view}>
				<Text style={textStyles}>React Native thirdweb starter</Text>
				{!address && (
					<>
						<Button
      						title={"Connect Wallet"}
      						onPress={async () => {
								await connect(metamaskConfig);
							}}
    					/>
					</>
				)}
				{address && (
					<>
						{!currentProfile && (
							/*<Button
								title={"Sign In with Lens"}
								onPress={signIn}
					  		/>
							*/
							<>
							{
								chainId === 80001 ? (
									<Button
										title={"Sign In with Lens"}
										onPress={signIn}
					  				/>
								) : (
									<Button
										title={"Switch Network"}
										onPress={() => switchChain(Mumbai.chainId)}
									/>
								)
							}
							</>
						)}
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