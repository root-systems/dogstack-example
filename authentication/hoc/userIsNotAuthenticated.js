import locationHelperBuilder from 'redux-auth-wrapper/lib/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/lib/history4/redirect'

import { getAccount } from '../getters'

const locationHelper = locationHelperBuilder({})

export default connectedRouterRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  authSelector: getAccount,
  predicate: data => !data.accessToken,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQuery(ownProps) || '/',
  allowRedirectBack: false
})
