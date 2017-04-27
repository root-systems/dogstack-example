import { createAction } from 'redux-actions'

export const signIn = createAction('SIGN_IN')
export const signInWith = createAction('SIGN_IN_WITH')
export const signInStart = createAction('SIGN_IN_START')
export const signInSuccess = createAction('SIGN_IN_SUCCESS')
export const signInError = createAction('SIGN_IN_ERROR')
export const signOut = createAction('SIGN_OUT')

export default {
  signIn,
  signInWith,
  signInStart,
  signInSuccess,
  signInError
  signOut
}
