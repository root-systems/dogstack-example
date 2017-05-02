import test from 'ava'
import freeze from 'deep-freeze'
import { Observable, Scheduler } from 'rxjs'
import { ActionsObservable } from 'redux-observable'
import updater from '../updater'
import {
  signInEpic,
  signOutEpic,
  registerEpic,
  initEpic
} from '../epic'
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
import { actions as accountActions } from '../../accounts'

test('register dispatches registerStart and accounts.create action', function (t) {
  t.plan(4)
  var i = 0
  var account = {}
  const registerAction = register(account)
  const { cid } = registerAction.meta
  const action$ = ActionsObservable.of(registerAction)
  const expectedActions = [
    registerStart(),
    accountActions.create(cid, account)
  ]
  return registerEpic(action$, null, {})
    .do(actualAction => {
      const expectedAction = expectedActions[i]
      if (i === 0 || i === 1) {
        t.deepEqual(actualAction, expectedAction)
        if (i === 0) t.is(actualAction.payload, expectedAction.payload)
        else if (i === 1) t.is(actualAction.payload.data, expectedAction.payload.data)
      }
      i++
    })
})

test('register happy path dispatches registerSuccess and signIn', function (t) {
  t.plan(3)
  var i = 0
  var account = {
    id: Symbol('account')
  }
  const registerAction = register(account)
  const { cid } = registerAction.meta // SMELL
  const action$ = ActionsObservable.from(
    Observable.create(observer => {
      observer.next(registerAction)
      observer.next(accountActions.set(cid, account.id, account))
      observer.next(accountActions.complete(cid))
      observer.complete()
    }),
    Scheduler.async
  )
  const expectedActions = [
    registerSuccess(account),
    // SMELL we should be able to pass in a cid to signIn
    // signIn(cid, account)
  ]
  return registerEpic(action$)
    .do(actualAction => {
      const expectedAction = expectedActions[i - 2]
      if (i === 2) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      } else if (i === 3) {
        t.is(actualAction.type, signIn.type)
      }
      i++
    })
})

// this legit fails because bug in feathers-action
// where actions.error.type is undefined
test('register unhappy path dispatches registerError', function (t) {
  t.plan(2)
  var i = 0
  var account = {}
  var err = 'bang!'
  const registerAction = register(account)
  const { cid } = registerAction.meta // SMELL
  const action$ = ActionsObservable.from(
    Observable.create(observer => {
      observer.next(registerAction)
      observer.next(accountActions.error(cid, err))
      observer.complete()
    }),
    Scheduler.async
  )
  const expectedAction = registerError(err)
  return registerEpic(action$)
    .do(actualAction => {
      if (i++ === 2) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      }
    })
})

test('signIn dispatches signInStart action', function (t) {
  t.plan(2)
  var i = 0
  const action$ = ActionsObservable.from([
    signIn()
  ])
  const expectedAction = signInStart()
  const feathers = {
    authenticate: () => Promise.resolve()
  }
  return signInEpic(action$, {}, { feathers })
    .do(actualAction => {
      if (i++ === 0) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      }
    })
})

test('signIn happy path dispatches signInSuccess action', function (t) {
  t.plan(2)
  var i = 0
  var creds = {}
  const action$ = ActionsObservable.from([
    signIn(creds)
  ])
  const expectedAction = signInSuccess(creds)
  const feathers = {
    authenticate: (creds) => Promise.resolve(creds)
  }
  return signInEpic(action$, {}, { feathers })
    .do(actualAction => {
      if (i++ === 1) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      }
    })
})

test('signIn unhappy path dispatches signInError', function (t) {
  t.plan(2)
  var i = 0
  var err = {}
  const action$ = ActionsObservable.from([
    signIn()
  ])
  const expectedAction = signInError(err)
  const feathers = {
    authenticate: (creds) => Promise.reject(err)
  }
  return signInEpic(action$, {}, { feathers })
    .do(actualAction => {
      if (i++ === 1) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      }
    })
})

test('signOut dispatches signOutStart action', function (t) {
  t.plan(2)
  var i = 0
  const action$ = ActionsObservable.from([
    signOut()
  ])
  const expectedAction = signOutStart()
  const feathers = {
    logout: () => Promise.resolve()
  }
  return signOutEpic(action$, {}, { feathers })
    .do(actualAction => {
      if (i++ === 0) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      }
    })
})

test('signOut happy path dispatches signOutSuccess action', function (t) {
  t.plan(2)
  var i = 0
  var result = {}
  const action$ = ActionsObservable.from([
    signOut()
  ])
  const expectedAction = signOutSuccess(result)
  const feathers = {
    logout: () => Promise.resolve(result)
  }
  return signOutEpic(action$, {}, { feathers })
    .do(actualAction => {
      if (i++ === 1) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      }
    })
})

test('signOut unhappy path dispatches signOutError', function (t) {
  t.plan(2)
  var i = 0
  var err = {}
  const action$ = ActionsObservable.from([
    signOut()
  ])
  const expectedAction = signOutError(err)
  const feathers = {
    logout: (creds) => Promise.reject(err)
  }
  return signOutEpic(action$, {}, { feathers })
    .do(actualAction => {
      if (i++ === 1) {
        t.deepEqual(actualAction, expectedAction)
        t.is(actualAction.payload, expectedAction.payload)
      }
    })
})
