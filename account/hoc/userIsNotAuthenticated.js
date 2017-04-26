import { UserAuthWrapper } from 'redux-auth-wrapper'
import { getAccountData } from '../getters'
import { routerActions } from 'react-router-redux'

export default UserAuthWrapper({
  authSelector: getAccountData,
  predicate: data => !data.accessToken,
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsNotAuthenticated', // a nice name for this auth check
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
  allowRedirectBack: false
})
