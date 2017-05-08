import React from 'react'
import { createComponent } from 'react-fela'
import { NavLink } from 'react-router-dom'
import { pipe, map, values } from 'ramda'

import styles from '../styles/nav'

const Container = createComponent(styles.container, 'nav')

export default function Nav (props) {
  const { routes } = props

  return <Container>
    {mapRouteLinks(routes)}
  </Container>
}

const mapRouteLinks = map(route => {
  const {
    path,
    Component
  } = route

  const name = path
  const key = path || '404'

  return (
    <NavLink to={path} key={key}>
      {name}
    </NavLink>
  )
})
