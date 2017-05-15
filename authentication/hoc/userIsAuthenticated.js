import { connectedRouterRedirect } from 'redux-auth-wrapper/lib/history4/redirect'
import { propOr } from 'ramda'
import { getAccount } from '../getters'

export default connectedRouterRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  authSelector: getAccount,
  predicate: propOr(null, 'accessToken'),
  redirectPath: '/sign-in',
  allowRedirectBack: true
})
