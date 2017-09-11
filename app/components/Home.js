import h from 'react-hyperscript'
import { compose } from 'recompose'
import { connect as connectFela } from 'react-fela'
import { Route, Switch } from 'react-router-dom'
import { pipe, map, values, isNil } from 'ramda'

import styles from '../styles/Home'

export default compose(
  connectFela(styles)
)(Home)

function Home (props) {
  const { routes } = props

  return (
    h('div', {
      className: styles.container
    }, [
      'dogstack!'
    ])
  )
}
