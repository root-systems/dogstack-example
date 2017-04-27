import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import feathers from './client'
import rootUpdater from './updater'
import rootEpic from './epic'

const middleware = [
  noopMiddleware,
  createEpicMiddleware(rootEpic, { dependencies: { feathers } }),
  routerMiddleware(browserHistory),
  createLogger()
]

const enhancer = compose(
  applyMiddleware(...middleware)
)

const rootReducer = updaterToReducer(rootUpdater)
const store = createStore(rootReducer, enhancer)

export default store

export const history = syncHistoryWithStore(browserHistory, store)

function updaterToReducer (updater) {
  return (state, action) => updater(action)(state)
}

// sometimes it's helpful to emit an undefined action
// specifically when using Rx.Observable.fromPromise
// and you want to swallow an error.
function noopMiddleware (store) {
  return next => action => {
    if (typeof action !== 'undefined') next(action)
  }
}
