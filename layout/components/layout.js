import React from 'react'
import { createComponent } from 'react-fela'
import { Switch } from 'react-router'

import styles from '../styles/layout'

const Container = createComponent(styles.container, 'div')

export default function Layout (props) {
  const { routes } = props
  return <Container>
    <Switch children={routes} />
  </Container>
}
