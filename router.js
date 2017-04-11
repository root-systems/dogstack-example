import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import React from 'react'

import { getSignedIn } from './account/getters'
import { history } from './store'

// Top Level Containers
import Layout from './layout/components/layout'
import DogsContainer from './dogs/containers/dogs'
import SignInContainer from './account/containers/signIn'
import SignUpContainer from './account/containers/signUp'


function predicate(account) {
  const token = account.accessToken
  return !!token 
}

function getter(state) {
  return state.account.account // how to get the user state
}

function notLoggedIn(account) {
  const token = account.account.accessToken
  return !token 
}

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: getter, 
  predicate,
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  allowRedirectBack: true
})

const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.account,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  // Want to redirect the user when they are done loading and authenticated
  predicate: notLoggedIn, 
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
  allowRedirectBack: false
})
export default function ({ store }) {
  return <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={UserIsAuthenticated(DogsContainer)} />
      <Route path='/login' component={UserIsNotAuthenticated(SignInContainer)} />
      <Route path='/signup' component={UserIsNotAuthenticated(SignUpContainer)} />
    </Route>
  </Router>
}
