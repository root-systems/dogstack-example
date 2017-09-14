import { Route } from 'react-router-dom'
import React from 'react'

// Top Level Containers
import Home from './app/containers/Home'
import DogsContainer from './dogs/containers/Dogs'
import DogContainer from './dogs/containers/Dog'

import {
  SignIn,
  LogOut,
  Register
} from 'dogstack-agents/components'
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated,
} from 'dogstack-agents/hoc'
import {
  getIsAuthenticated,
  getIsNotAuthenticated
} from 'dogstack-agents/getters'

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    Component: Home,
    selector: getIsNotAuthenticated,
    navigation: {
      title: 'app.home',
      icon: 'fa fa-home'
    }
  },
  {
    name: 'signIn',
    path: '/sign-in',
    exact: true,
    Component: UserIsNotAuthenticated(SignIn),
    navigation: {
      title: 'agents.signIn',
      selector: getIsNotAuthenticated,
      icon: 'fa fa-sign-in'
    }
  },
  {
    name: 'logOut',
    navigation: {
      Component: LogOut,
      selector: getIsAuthenticated,
      icon: 'fa fa-sign-out'
    }
  },
  {
    name: 'register',
    path: '/register',
    Component: UserIsNotAuthenticated(Register),
    navigation: {
      title: 'agents.register',
      selector: getIsNotAuthenticated,
      icon: 'fa fa-heart'
    }
  },
  {
    name: 'dogs',
    path: '/',
    exact: true,
    Component: UserIsAuthenticated(DogsContainer),
    selector: getIsAuthenticated,
    navigation: {
      title: 'dogs.dogs',
      selector: getIsAuthenticated,
      icon: 'fa fa-paw'
    }
  },
  {
    name: 'dog',
    path: '/d/:dogId',
    Component: UserIsAuthenticated(DogContainer)
  }
]
