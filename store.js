import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import feathers from './client'
import rootUpdater from './updater'
import rootEpic from './epic'

const middleware = [
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
