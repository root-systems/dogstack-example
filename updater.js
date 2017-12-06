import { concat, updateStateAt } from 'redux-fp'
import { routerReducer } from 'react-router-redux'

import { updater as dogs } from './dogs'

const router = updateStateAt('router', reducerToUpdater(routerReducer))

export default concat(
  dogs,
  router
)

function reducerToUpdater (reducer) {
  return action => state => reducer(state, action)
}
