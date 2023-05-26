import React from 'react';
import {
	SafeAreaView,
	Text,
	View,
} from 'react-native';
import { useExplorePublicationsQuery } from '../../types/graph';
import { PublicationMainFocus, PublicationSortCriteria, PublicationTypes } from '../../types/lens';
import { FlatList } from 'react-native-gesture-handler';
import Video from './Video'


const Home = () => {

	const { data, loading, error } = useExplorePublicationsQuery({
		variables: {
			request: {
				sortCriteria: PublicationSortCriteria.CuratedProfiles,
				publicationTypes: [PublicationTypes.Post],
				limit: 10,
				metadata: {
					mainContentFocus: [PublicationMainFocus.Video]
				}
			}
		}
	})

	const publications = data?.explorePublications?.items
	const pageInfo = data?.explorePublications?.pageInfo

	if (loading) {
		return (
			<Text>Loading publications...</Text>
		)
	}


	return (
		<SafeAreaView>
			<View>
				<FlatList 
					data={publications}
					pagingEnabled
					renderItem={({item, index}) => 
						<>
							<View style={{
								padding: 5
							}}>
								<Text>{item.profile.handle}</Text>
								<Text>{item.metadata.content}</Text>
								<Video />
							</View>
							<View style={{
								display: 'flex',
								flexDirection: 'row',
								padding: 5
							}}>
								<Text style={{ margin: 3 }}>{item.stats.totalAmountOfCollects}</Text>
								<Text style={{ margin: 3 }}>{item.stats.totalAmountOfMirrors}</Text>
								<Text style={{ margin: 3 }}>{item.stats.totalAmountOfComments}</Text>
							</View>
						</>
					}	
				/>
			</View>
		</SafeAreaView>
	);
};

export default Home