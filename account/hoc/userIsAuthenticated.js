import { UserAuthWrapper } from 'redux-auth-wrapper'
import { getAccountData } from '../getters'
import { routerActions } from 'react-router-redux'

export default UserAuthWrapper({
  authSelector: getAccountData, 
  predicate: data => !!data.accessToken,
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  allowRedirectBack: true
})

