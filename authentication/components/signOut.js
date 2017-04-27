import React from 'react'

import styles from '../styles/signOut'

export default class SignIn extends React.Component {
  componentDidMount () {
    this.props.signOut()
  }

  render () {
    return (
      <div>
        Logging out
      </div>
    )
  }
}
