import h from 'react-hyperscript'
import { connect as connectStyles } from 'react-fela'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { isNil } from 'ramda'

import styles from '../styles/Dog'

const Dog = (props) => {
  const { dog, styles } = props
  if (isNil(dog)) return null

  return (
    h('div', {
      className: styles.container
    }, [
      h(Link, {
        className: styles.name,
        to: `/d/${dog.id}`
      }),
      h('i', {
        className: 'em em-dog'
      }),
      dog.name,
      h('i', {
        className: 'em em-dog'
      })
    ])
  )
}

export default compose(
  connectStyles(styles)
)(Dog)
