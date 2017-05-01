import test from 'ava'
import freeze from 'deep-freeze'
import updater, { localUpdater } from '../updater'
import {
  signIn,
  signInStart,
  signInSuccess,
  signInError,
  signOut,
  signOutStart,
  signOutSuccess,
  signOutError,
  registerStart,
  registerSuccess,
  registerError,
  register
} from '../actions'

test('REGISTER_START', function (t) {
  const initialState = {}
  freeze(initialState)
  const newState = localUpdater(registerStart())(initialState)
  t.deepEqual(newState.account, initialState)
  t.true(newState.isRegistering)
})

test('REGISTER_SUCCESS', function (t) {
  const initialState = {}
  freeze(initialState)
  const newAccount = {name: 'test', email: 'derp@dog.com', id: 1}
  const newState = localUpdater(registerSuccess(newAccount))(initialState)
  t.deepEqual(newState.account, newAccount)
  t.false(newState.isRegistering)
})

test('REGISTER_ERROR', function (t) {
  const initialState = {}
  const error = 'bang!'
  freeze(initialState)
  const newState = localUpdater(registerError(error))(initialState)
  t.is(newState.error, error)
})

test('SIGN_IN_SUCCESS', function (t) {
  const initialState = {}
  freeze(initialState)
  const newAccount = {name: 'test', email: 'derp@dog.com'}
  const newState = localUpdater(signInSuccess(newAccount))(initialState)
  t.is(newState.account, newAccount)
  t.false(newState.isSigningIn)
})

test('SIGN_OUT', function (t) {
  const initialState = {name: 'test', email: 'derp@dog.com'}
  freeze(initialState)
  const newState = localUpdater(signOut())(initialState)
  t.deepEqual(newState.account, {})
})

test('SIGN_IN_ERROR', function (t) {
  const initialState = {}
  const error = 'bang!'
  freeze(initialState)
  const newState = localUpdater(signInError(error))(initialState)
  t.is(newState.error, error)
  t.false(newState.isSigningIn)
})

test('SIGN_IN_START', function (t) {
  const initialState = {}
  freeze(initialState)
  const newState = localUpdater(signInStart())(initialState)
  t.deepEqual(newState.account, initialState)
  t.true(newState.isSigningIn)
})
