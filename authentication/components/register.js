import React from 'react'
import t from 'tcomb-form'

import styles from '../styles/register'

import { SignUpFormSchema, minPasswordLength } from '../types'

const passwordLengthError = `Password must be a minimum of ${minPasswordLength} characters`
const options = {
  error: 'Passwords must match',
  fields: {
    email: {
      error: 'Invalid email'
    },
    password: {
      type: 'password',
      error: passwordLengthError
    },
    confirmPassword: {
      type: 'password',
      error: passwordLengthError
    }
  }
}

export default class Register extends React.Component {
  onSubmit (evt) {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      const { email, password } = value
      this.props.register({ email, password })
    }
  }

  render () {
    return (
      <div className={'TODO'}>
        <form onSubmit={(evt) => this.onSubmit(evt)} >
          <t.form.Form type={SignUpFormSchema} options={options} ref='form' />
          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}
