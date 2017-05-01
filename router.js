import { Router, Route, IndexRoute } from 'react-router'
import React from 'react'

import { history } from './store'

import UserIsAuthenticated from './authentication/hoc/userIsAuthenticated'
import UserIsAuthenticatedOrHome from './authentication/hoc/userIsAuthenticatedOrHome'
import UserIsNotAuthenticated from './authentication/hoc/userIsNotAuthenticated'
// Top Level Containers
import Layout from './layout/components/layout'
import DogsContainer from './dogs/containers/dogs'
import SignInContainer from './authentication/containers/signIn'
import SignOutContainer from './authentication/containers/signOut'
import RegisterContainer from './authentication/containers/register'

export default function ({ store }) {
  return <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={UserIsAuthenticated(DogsContainer)} />
      <Route path='/sign-in' component={UserIsNotAuthenticated(SignInContainer)} />
      <Route path='/sign-out' component={UserIsAuthenticatedOrHome(SignOutContainer)} />
      <Route path='/register' component={UserIsNotAuthenticated(RegisterContainer)} />
    </Route>
  </Router>
}
