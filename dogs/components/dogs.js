import React from 'react'
import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'
import dogNames from 'dog-names'
import { mapObjIndexed, values, keys, pipe} from 'ramda'
import createCid from 'cuid'

import Dog from './dog'

import gcs from '../util/generate-component-styles'
import styles from '../styles/dogs'

const mapDogs = mapObjIndexed((dog, key) => {
  return <Dog key={key} name={dog.name} />
})
const mapDogsToValues = pipe(mapDogs, values)

class Dogs extends React.Component {
  render () {
    const { styles, dogs, actions } = this.props
    const { create, remove } = actions.dogs

    return <div className={styles.container}>
      <span>MY DOGS</span>
      <div className={styles.dogsContainer}>
        {mapDogsToValues(dogs)}
      </div>
      <button
        className={styles.adoptButton}
        onClick={() => create({ name: dogNames.allRandom() })}
      >
        Adopt a dog!
      </button>
      <button
        className={styles.adoptButton}
        onClick={() => {
          remove(keys(dogs)[0])
        }}
      >
        Give a dog to a friend!
      </button>
      <Link to='/sign-in'>Sign In</Link>
      <Link to='/sign-out'>Sign Out</Link>
      <Link to='/register'>Register</Link>
    </div>
  }
}

export default connectFela(
  gcs(styles)
)(Dogs)
