import React from 'react'
import { Link } from 'react-router'
import { connect as connectFela } from 'react-fela'
import dogNames from 'dog-names'
import { map, addIndex, values } from 'ramda'
import random from 'lodash/random'

import Dog from './dog'

import gcs from '../util/generate-component-styles'
import styles from '../styles/dogs'

const mapIndexed = addIndex(map)

class Dogs extends React.Component {
  componentDidMount () {
    this.props.findDog()
  }

  render () {
    const { styles, dogs, createDog, removeDog } = this.props

    return <div className={styles.container}>
      <span>MY DOGS</span>
      <div className={styles.dogsContainer}>
        {
          values(mapIndexed((dog, i) => {
            return <Dog key={i} name={dog.name} />
          }, dogs))
        }
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
          removeDog(0)
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
