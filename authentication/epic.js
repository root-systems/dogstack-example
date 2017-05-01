import { combineEpics } from 'redux-observable'
import Rx from 'rxjs'

import { actions as accounts } from '../accounts'
import {
  signIn, signInStart, signInSuccess, signInError,
  signOut, signOutStart, signOutSuccess, signOutError,
  register, registerStart, registerSuccess, registerError
} from './actions'

export default combineEpics(initEpic, signInEpic, signOutEpic, registerEpic)

function initEpic () {
  return Rx.Observable.of(signIn())
    .delay(0) // apparently needs delay otherwise action lost
}

function signInEpic (action$, store, { feathers }) {
  return action$.ofType(signIn.type)
    .mergeMap(action => Rx.Observable.merge(
      Rx.Observable.of(signInStart()),
      Rx.Observable.fromPromise(
        feathers.authenticate(action.payload)
          .then(signInSuccess)
          .catch((err) => {
            // if init signIn() fails, it's not an error
            if (err.message === 'Could not find stored JWT and no authentication strategy was given') return
            return signInError(err)
          })
        )
      )
    )
}

function signOutEpic (action$, store, { feathers }) {
  return action$.ofType(signOut.type)
    .mergeMap(action => Rx.Observable.merge(
      Rx.Observable.of(signInStart()),
      Rx.Observable.fromPromise(
        feathers.logout()
          .then(signOutSuccess)
          .catch(signOutError)
        )
      )
    )
}

function registerEpic (action$, store, { feathers }) {
  return action$.ofType(register.type)
    .mergeMap(action => {
      const { cid } = action.meta

      const createdSuccess$ = action$.ofType(accounts.set.type).filter(onlyCid).take(1)
      const createdError$ = action$.ofType(accounts.error.type).filter(onlyCid).take(1)

      return Rx.Observable.merge(
        Rx.Observable.of(
          registerStart(),
          accounts.create(action.meta.cid, action.payload)
        ),
        createdSuccess$.mergeMap(created => {
          const { email, password } = action.payload
          return Rx.Observable.of(
            registerSuccess(created.payload.data),
            signIn({ strategy: 'local', email, password })
          )
        }),
        createdError$.map(action => registerError(action.payload))
      )

      function onlyCid (action) {
        return action.meta.cid === cid
      }
    })
}
