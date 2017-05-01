import { UserAuthWrapper } from 'redux-auth-wrapper'
import { getAccount } from '../getters'
import { routerActions } from 'react-router-redux'

export default UserAuthWrapper({
  authSelector: getAccount,
  predicate: data => !!data.accessToken,
  failureRedirectPath: '/sign-in',
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  allowRedirectBack: true
})
