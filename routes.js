import { Route } from 'react-router-dom'
import React from 'react'

import Dogs from './dogs/containers/Dogs'

export default [
  {
    name: 'dog',
    path: '/',
    exact: true,
    Component: Dogs,
    navigation: {
      title: 'dogs.dog',
      icon: 'fa fa-paw'
    }
  }
]
