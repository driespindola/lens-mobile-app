import * as Apollo from '@apollo/client';
import { AuthenticateDocument, AuthenticateMutation, AuthenticateMutationVariables, GetChallengeDocument, GetChallengeQuery, GetChallengeQueryVariables } from './lens';

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