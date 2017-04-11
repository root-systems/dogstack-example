import { createSelector, createStructuredSelector } from 'reselect'

export const getAccount = (state) => state.account

export const getSigningIn = createSelector(
  getAccount,
  (account) => account.signingIn
)

export const getToken = (state) => {
  return state.account.account 
}
export const getError = createSelector(
  getAccount,
  (account) => account.error
)

export const getSignedIn = createSelector(
  getToken,
  getError,
  getSigningIn,
  (token, error, signingIn) => { 
    return (!error && !signingIn) ? token : {}
  }
)

export const getSignInProps = createStructuredSelector({
  error: getError
})

