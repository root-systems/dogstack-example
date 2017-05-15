import React from 'react'
import { connect as connectStyles } from 'react-fela'
import { Link } from 'react-router-dom'
import { isNil } from 'ramda'

import styles from '../styles/dog'

export default connectStyles(styles)(Dog)

function Dog (props) {
  const { dog, styles } = props
  if (isNil(dog)) return null

  return <div className={styles.container}>
    <Link className={styles.name} to={`/dogs/${dog.id}`}>
      <i className='em em-dog' />
      {dog.name}
      <i className='em em-dog' />
    </Link>
  </div>
}
