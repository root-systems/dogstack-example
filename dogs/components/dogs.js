import React from 'react'
import { connect as connectStyles } from 'react-fela'
import dogNames from 'dog-names'
import { mapObjIndexed, values, keys, pipe} from 'ramda'

import Dog from './dog'

import styles from '../styles/dogs'

const mapDogs = mapObjIndexed((dog, key) => {
  return <Dog key={key} dog={dog} size='small' />
})
const mapDogsToValues = pipe(mapDogs, values)

class Dogs extends React.Component {
  render () {
    const { styles, dogs, actions } = this.props
    const { create, remove } = actions.dogs

    return <div className={styles.container}>
      <h1 className={styles.title}>MY DOGS</h1>
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
      <div className={styles.dogsContainer}>
        {mapDogsToValues(dogs)}
      </div>
    </div>
  }
}

export default connectStyles(styles)(Dogs)
