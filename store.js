import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import feathers from './client'
import rootUpdater from './updater'
import rootEpic from './epic'

export default function configureStore ({ history }) {
  const middleware = [
    createEpicMiddleware(rootEpic, { dependencies: { feathers } }),
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require(`redux-logger`)
    middleware.push(logger)
  }

  const enhancer = compose(
    applyMiddleware(...middleware)
  )

  const rootReducer = updaterToReducer(rootUpdater)
  const store = createStore(rootReducer, enhancer)

  return store
}

function updaterToReducer (updater) {
  return (state, action) => updater(action)(state)
}
