import { Route } from 'react-router-dom'
import React from 'react'

// Top Level Containers
import DogsContainer from './dogs/containers/Dogs'
import DogContainer from './dogs/containers/Dog'

export default [
  {
    name: 'dogs',
    path: '/',
    exact: true,
    Component: DogsContainer,
    navigation: {
      title: 'dogs.dogs',
      icon: 'fa fa-paw'
    }
  },
  {
    name: 'dog',
    path: '/d/:dogId',
    Component: DogContainer
  }
]
