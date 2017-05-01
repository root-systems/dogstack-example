import { UserAuthWrapper } from 'redux-auth-wrapper'
import { getAccount } from '../getters'
import { routerActions } from 'react-router-redux'

export default UserAuthWrapper({
  authSelector: getAccount,
  predicate: data => !!data.accessToken,
  failureRedirectPath: '/',
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticatedOrHome',
  allowRedirectBack: false
})
