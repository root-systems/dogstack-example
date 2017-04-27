import React from 'react'
import { createComponent } from 'react-fela'

import styles from '../styles/layout'

const Container = createComponent(styles.container, 'div')

export default function Layout (props) {
  return <Container>
    { props.children }
  </Container>
}
