import { updateStateAt, combine, withDefaultState, decorate } from 'redux-fp'

const account = action => (state = {}) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return action.payload
    case 'SIGN_IN_SUCCESS':
      return action.payload
    case 'SIGN_OUT_SUCCESS':
      return {}
    default:
      return state
  }
}

const signingIn = action => (state = false) => {
  switch (action.type) {
    case 'SIGN_IN_START':
      return true
    case 'SIGN_IN_SUCCESS':
      return false
    case 'SIGN_IN_ERROR':
      return false
    default:
      return state
  }
}

const registering = action => (state = false) => {
  switch (action.type) {
    case 'REGISTER_START':
      return true
    case 'REGISTER_SUCCESS':
      return false
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

export default decorate(
  withDefaultState({}),
  updateStateAt('authentication'),
  withDefaultState({}),
  combine({
    account,
    signingIn,
    registering,
    error
  })
)
