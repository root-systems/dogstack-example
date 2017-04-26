import { updateStateAt, combine, withDefaultState, decorate } from 'redux-fp'

const account = action => (state = {}) => {
  switch (action.type) {
    case 'SIGN_UP_SUCCESS':
      return action.payload
    case 'SIGN_IN_SUCCESS':
      return action.payload
    case 'SIGN_OUT':
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

const signingUp = action => (state = false) => {
  switch (action.type) {
    case 'SIGN_UP_START':
      return true
    case 'SIGN_UP_SUCCESS':
      return false
    case 'SIGN_UP_ERROR':
      return false
    default:
      return state
  }
}

const error = action => (state = {}) => {
  switch (action.type) {
    case 'SIGN_UP_START':
    case 'SIGN_IN_START':
      return {}
    case 'SIGN_UP_ERROR':
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
  updateStateAt('account'),
  withDefaultState({}),
  combine({
    account,
    signingIn,
    signingUp,
    error
  })
)
