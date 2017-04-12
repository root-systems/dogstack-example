import React from 'react'
import { Link } from 'react-router'
import { connect as connectFela } from 'react-fela'
import dogNames from 'dog-names'
import { map, addIndex, values, keys, pipe} from 'ramda'

import Dog from './dog'

import gcs from '../util/generate-component-styles'
import styles from '../styles/dogs'

const mapIndexed = addIndex(map)
const mapDogs = mapIndexed((dog, i) => {
  return <Dog key={i} name={dog.name} />
})
const mapDogsToValues = pipe(mapDogs, values)


class Dogs extends React.Component {
  componentDidMount () {
    this.props.findDog()
  }

  render () {
    const { styles, dogs, createDog, removeDog } = this.props


    return <div className={styles.container}>
      <span>MY DOGS</span>
      <div className={styles.dogsContainer}>
        {mapDogsToValues(dogs)}
      </div>
      <button
        className={styles.adoptButton}
        onClick={() => { createDog({ name: dogNames.allRandom() }) }}
      >
        Adopt a dog!
      </button>
      <button
        className={styles.adoptButton}
        onClick={() => {
          removeDog(keys(dogs)[0])
        }}
      >
        Give a dog to a friend!
      </button>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  }
}

export default connectFela(
  gcs(styles)
)(Dogs)
