import locationHelperBuilder from 'redux-auth-wrapper/lib/history4/locationHelper'
import { propOr } from 'ramda'
import { connectedRouterRedirect } from 'redux-auth-wrapper/lib/history4/redirect'

import { getAccount } from '../getters'

const locationHelper = locationHelperBuilder({})

export default connectedRouterRedirect({
  wrapperDisplayName: 'UserIsAuthenticatedOrHome',
  authSelector: getAccount,
  predicate: propOr(null, 'accessToken'),
  redirectPath: '/',
  allowRedirectBack: false
})
