import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducer'
import client from './client'

const middleware = [
  thunk.withExtraArgument(client),
  routerMiddleware(browserHistory),
  createLogger()// TODO, remove
]

const enhancer = compose(applyMiddleware(
  ...middleware
))

const store = createStore(rootReducer, enhancer)

export default store

export const history = syncHistoryWithStore(browserHistory, store)
