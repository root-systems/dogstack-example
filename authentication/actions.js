import createAction from '@f/create-action'
import createCid from 'cuid'

export const signIn = createAction('SIGN_IN', undefined, metaCreator)
export const signInStart = createAction('SIGN_IN_START')
export const signInSuccess = createAction('SIGN_IN_SUCCESS')
export const signInError = createAction('SIGN_IN_ERROR')

export const signOut = createAction('SIGN_OUT', undefined, metaCreator)
export const signOutStart = createAction('SIGN_OUT_START')
export const signOutSuccess = createAction('SIGN_OUT_SUCCESS')
export const signOutError = createAction('SIGN_OUT_ERROR')

export const register = createAction('REGISTER', undefined, metaCreator)
export const registerStart = createAction('REGISTER_START')
export const registerSuccess = createAction('REGISTER_SUCCESS')
export const registerError = createAction('REGISTER_ERROR')

export default {
  signIn,
  signInStart,
  signInSuccess,
  signInError,
  signOut,
  signOutStart,
  signOutSuccess,
  signOutError,
  register,
  registerStart,
  registerSuccess,
  registerError
}

function metaCreator (...args) {
  return { cid: createCid() }
}
