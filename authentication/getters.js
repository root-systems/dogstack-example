import { createSelector, createStructuredSelector } from 'reselect'

export const getAuthentication = (state) => state.authentication

export const getSigningIn = createSelector(
  getAuthentication,
  (authentication) => authentication.signingIn
)

export const getAccount = createSelector(
  getAuthentication,
  (authentication) => authentication.account
)

export const getError = createSelector(
  getAuthentication,
  (authentication) => authentication.error
)

export const getSignInProps = createStructuredSelector({
  error: getError
})
