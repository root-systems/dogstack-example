import { Route } from 'react-router-dom'
import React from 'react'

import UserIsAuthenticated from './authentication/hoc/userIsAuthenticated'
import UserIsAuthenticatedOrHome from './authentication/hoc/userIsAuthenticatedOrHome'
import UserIsNotAuthenticated from './authentication/hoc/userIsNotAuthenticated'

// Top Level Containers
import Home from './app/containers/home'
import DogsContainer from './dogs/containers/dogs'
import SignInContainer from './authentication/containers/signIn'
import SignOutContainer from './authentication/containers/signOut'
import RegisterContainer from './authentication/containers/register'

export default [
  {
    path: '/',
    exact: true,
    Component: Home
  },
  {
    path: '/sign-in',
    Component: UserIsNotAuthenticated(SignInContainer)
  },
  {
    path: '/sign-out',
    Component: UserIsAuthenticatedOrHome(SignOutContainer)
  },
  {
    path: '/register',
    Component: UserIsNotAuthenticated(RegisterContainer)
  },
  {
    path: '/dogs',
    Component: UserIsAuthenticated(DogsContainer)
  },
  /*
  {
    path: '/dog',
    Component: UserIsAuthenticated(DogContainer)
  }
  */
]
