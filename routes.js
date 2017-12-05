import { Route } from 'react-router-dom'
import React from 'react'

import Dog from './dogs/components/Dog'

export default [
  {
    name: 'dog',
    path: '/',
    exact: true,
    Component: Dog,
    navigation: {
      title: 'dogs.dog',
      icon: 'fa fa-paw'
    }
  }
]
