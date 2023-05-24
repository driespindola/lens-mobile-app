import {
	metamaskWallet,
	rainbowWallet,
	ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	ApolloLink, 
	HttpLink
} from '@apollo/client';
import Routes from './Routes';

const httpLink = new HttpLink({ uri: 'https://api-mumbai.lens.dev' });
const link = ApolloLink.from([httpLink]);

const APClient = new ApolloClient({
	link: link,
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ThirdwebProvider
			activeChain="mumbai"
			supportedWallets={[metamaskWallet(), rainbowWallet()]}>
			<ApolloProvider client={APClient}>
				<Routes />
			</ApolloProvider>
		</ThirdwebProvider>
	);
};

export default App;
