import * as Apollo from '@apollo/client';
import { AuthenticateDocument, AuthenticateMutation, AuthenticateMutationVariables, ExplorePublicationsDocument, ExplorePublicationsQuery, ExplorePublicationsQueryVariables, GetChallengeDocument, GetChallengeQuery, GetChallengeQueryVariables, ProfilesDocument, ProfilesQuery, ProfilesQueryVariables } from './lens';

export function useAuthenticateMutation (
    baseOptions?: Apollo.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>
) {
    const options = { ...baseOptions }
    return Apollo.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, options)
}

export function useGetChallengeLazyQuery (
    baseOptions?: Apollo.LazyQueryHookOptions<GetChallengeQuery, GetChallengeQueryVariables>
) {
    const options = { ...baseOptions }
    return Apollo.useLazyQuery<GetChallengeQuery, GetChallengeQueryVariables>(GetChallengeDocument, options)
}

export function useProfilesLazyQuery (
    baseOptions?: Apollo.LazyQueryHookOptions<ProfilesQuery, ProfilesQueryVariables>
) {
    const options = { ...baseOptions }
    return Apollo.useLazyQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, options)
}

export function useExplorePublicationsQuery (
    baseOptions?: Apollo.QueryHookOptions<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>
) {
    const options = { ...baseOptions }
    return Apollo.useQuery<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>(ExplorePublicationsDocument, options )
}