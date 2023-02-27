import * as Apollo from '@apollo/client';
import { RecommendedProfilesQuery, RecommendedProfilesQueryVariables, RecommendedProfilesDocument, ProfileQuery, ProfileQueryVariables, PublicationsQuery, PublicationsQueryVariables, ExplorePublicationsQuery, ExplorePublicationsQueryVariables, ExplorePublicationsDocument, PublicationsDocument, ExploreProfilesQuery, ExploreProfilesQueryVariables, ExploreProfilesDocument } from './lens';

export function useRecommendedProfilesQuery(
    baseOptions?: Apollo.QueryHookOptions<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useQuery<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>(
      RecommendedProfilesDocument,
      options
    )
}

export function useProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = { ...baseOptions };
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(
    RecommendedProfilesDocument,
    options
  )
}

export function usePublicationsQuery(
  baseOptions?: Apollo.QueryHookOptions<PublicationsQuery, PublicationsQueryVariables>
) {
  const options = { ...baseOptions };
  return Apollo.useQuery<PublicationsQuery, PublicationsQueryVariables>(
    PublicationsDocument,
    options
  )
}

export function useExplorePublicationsQuery(
  baseOptions?: Apollo.QueryHookOptions<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>
) {
  const options = { ...baseOptions };
  return Apollo.useQuery<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>(
    ExplorePublicationsDocument,
    options
  )
}

export function useExploreProfilesQuery(
  baseOptions?: Apollo.QueryHookOptions<ExploreProfilesQuery, ExploreProfilesQueryVariables>
) {
  const options = { ...baseOptions };
  return Apollo.useQuery<ExploreProfilesQuery, ExploreProfilesQueryVariables>(
    ExploreProfilesDocument,
    options
  )
}