import React from 'react'
import { Link } from 'react-router'
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
  constructor (...args) {
    super(...args)
    this.createDog = this.createDog.bind(this)
    this.removeDog = this.removeDog.bind(this)
  }
  componentDidMount () {
    const cid = createCid()
    this.props.findDogs(cid)
  }

  render () {
    const { styles, dogs } = this.props

    return <div className={styles.container}>
      <span>MY DOGS</span>
      <div className={styles.dogsContainer}>
        {mapDogsToValues(dogs)}
      </div>
      <button
        className={styles.adoptButton}
        onClick={() => this.createDog({ name: dogNames.allRandom() }) }
      >
        Adopt a dog!
      </button>
      <button
        className={styles.adoptButton}
        onClick={() => {
          this.removeDog(keys(dogs)[0])
        }}
      >
        Give a dog to a friend!
      </button>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/signin'>Sign In</Link>
    </div>
  }

  createDog (dog) {
    const cid = createCid()
    this.props.createDog(cid, dog)
  }

  removeDog (id) {
    const cid = createCid()
    this.props.removeDog(cid, id)
  }
}

export default connectFela(
  gcs(styles)
)(Dogs)
