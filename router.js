import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import React from 'react'

import { getAccountData } from './account/getters'
import { history } from './store'

import UserIsAuthenticated from './account/hoc/userIsAuthenticated'
import UserIsNotAuthenticated from './account/hoc/userIsNotAuthenticated'
// Top Level Containers
import Layout from './layout/components/layout'
import DogsContainer from './dogs/containers/dogs'
import SignInContainer from './account/containers/signIn'
import SignUpContainer from './account/containers/signUp'


export default function ({ store }) {
  return <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={UserIsAuthenticated(DogsContainer)} />
      <Route path='/login' component={UserIsNotAuthenticated(SignInContainer)} />
      <Route path='/signup' component={UserIsNotAuthenticated(SignUpContainer)} />
    </Route>
  </Router>
}
