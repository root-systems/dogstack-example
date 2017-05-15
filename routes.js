import { Route } from 'react-router-dom'
import React from 'react'

import UserIsAuthenticated from './authentication/hoc/userIsAuthenticated'
import UserIsAuthenticatedOrHome from './authentication/hoc/userIsAuthenticatedOrHome'
import UserIsNotAuthenticated from './authentication/hoc/userIsNotAuthenticated'

// Top Level Containers
import Home from './app/containers/home'
import DogsContainer from './dogs/containers/dogs'
import DogContainer from './dogs/containers/dog'
import SignInContainer from './authentication/containers/signIn'
import SignOutContainer from './authentication/containers/signOut'
import RegisterContainer from './authentication/containers/register'

import { getIsAuthenticated, getIsNotAuthenticated } from './authentication/getters'

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    Component: Home,
    navigation: {
      title: 'Sign in'
    }
  },
  {
    name: 'sign-in',
    path: '/sign-in',
    Component: UserIsNotAuthenticated(SignInContainer),
    navigation: {
      title: 'Sign in',
      selector: getIsNotAuthenticated
    }
  },
  {
    name: 'sign-out',
    path: '/sign-out',
    Component: UserIsAuthenticatedOrHome(SignOutContainer),
    navigation: {
      title: 'Sign out',
      selector: getIsAuthenticated
    }
  },
  {
    name: 'register',
    path: '/register',
    Component: UserIsNotAuthenticated(RegisterContainer),
    navigation: {
      title: 'Register',
      selector: getIsNotAuthenticated
    }
  },
  {
    path: '/dogs/:dogId',
    Component: UserIsAuthenticated(DogContainer)
  },
  {
    name: 'dogs',
    path: '/dogs',
    Component: UserIsAuthenticated(DogsContainer),
    navigation: {
      title: 'Dogs',
      selector: getIsAuthenticated
    }
  }
]
