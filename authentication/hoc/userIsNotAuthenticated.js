import { UserAuthWrapper } from 'redux-auth-wrapper'
import { getAccount } from '../getters'
import { routerActions } from 'react-router-redux'

export default UserAuthWrapper({
  authSelector: getAccount,
  predicate: data => !data.accessToken,
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsNotAuthenticated', // a nice name for this auth check
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
  allowRedirectBack: false
})
