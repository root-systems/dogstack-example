import { connectedRouterRedirect } from 'redux-auth-wrapper/lib/history4/redirect'
import { getAccount } from '../getters'

export default connectedRouterRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  authSelector: getAccount,
  predicate: data => !!data.accessToken,
  redirectPath: '/sign-in',
  allowRedirectBack: true
})
