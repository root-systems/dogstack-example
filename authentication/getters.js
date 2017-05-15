import { createSelector, createStructuredSelector } from 'reselect'
import { prop, propOr, not } from 'ramda'

export const getAuthentication = prop('authentication')

export const getSigningIn = createSelector(
  getAuthentication,
  propOr(false, 'signingIn')
)

export const getAccount = createSelector(
  getAuthentication,
  propOr(null, 'account')
)

export const getAccessToken = createSelector(
  getAccount,
  propOr(null, 'accessToken')
)

export const getIsAuthenticated = createSelector(
  getAccount,
  Boolean
)

export const getIsNotAuthenticated = createSelector(
  getAccount,
  not
)

export const getError = createSelector(
  getAuthentication,
  propOr(null, 'error')
)

export const getSignInProps = createStructuredSelector({
  error: getError
})
