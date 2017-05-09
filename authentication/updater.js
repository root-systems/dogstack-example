import { updateStateAt, combine, withDefaultState, decorate } from 'redux-fp'

const account = action => (state = null) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'SIGN_IN_SUCCESS':
      return action.payload
    case 'SIGN_OUT_SUCCESS':
      return null
    default:
      return state
  }
}

const isSigningIn = action => (state = false) => {
  switch (action.type) {
    case 'SIGN_IN_START':
      return true
    case 'SIGN_IN_SUCCESS':
    case 'SIGN_IN_ERROR':
      return false
    default:
      return state
  }
}

const isRegistering = action => (state = false) => {
  switch (action.type) {
    case 'REGISTER_START':
      return true
    case 'REGISTER_SUCCESS':
    case 'REGISTER_ERROR':
      return false
    default:
      return state
  }
}

const error = action => (state = null) => {
  switch (action.type) {
    case 'REGISTER_START':
    case 'SIGN_IN_START':
      return null
    case 'REGISTER_ERROR':
      console.error(action.payload)
      return action.payload
    case 'SIGN_IN_ERROR':
      console.error(action.payload)
      return action.payload
    default:
      return state
  }
}

export const localUpdater = decorate(
  withDefaultState({}),
  combine({
    account,
    isSigningIn,
    isRegistering,
    error
  })
)

export const globalDecorator = decorate(
  withDefaultState({}),
  updateStateAt('authentication'),
  localUpdater
)
export default globalDecorator
