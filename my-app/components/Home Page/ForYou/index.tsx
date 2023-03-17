import * as React from 'react';
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ExplorePublicationResult, ExplorePublicationsDocument } from "../../../types/lens";
import { FlatList } from "react-native";
import VideoCard from "./VideoCard";
import { WINDOW_HEIGHT } from "../../../utils/getHeight";

const ForYou = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  
    const { data } = useQuery<{
      explorePublications: ExplorePublicationResult;
    }>(ExplorePublicationsDocument, {
      variables: {
        request: {
          sortCriteria: 'CURATED_PROFILES',
          publicationTypes: ['POST'],
          limit: 10,
          metadata: {
            mainContentFocus: ['VIDEO']
          }
        }
      }
    })
  
    const publications = data?.explorePublications.items
   
    return (
      <>
        <FlatList
          data={publications}
          pagingEnabled
          renderItem={({ item, index }) => (
            <VideoCard data={item} isActive={activeVideoIndex === index} />
          )}
          onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - 65)
          );
          setActiveVideoIndex(index);
        }}
      />
      </>
    );
  }
  
  export default ForYou