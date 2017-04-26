import { concat, updateStateAt } from 'redux-fp'
import { routerReducer } from 'react-router-redux'

import { updater as dogs } from './dogs'
import { updater as account } from './account'

const routing = updateStateAt('routing', reducerToUpdater(routerReducer))

export default concat(
  dogs,
  account,
  routing
)

function reducerToUpdater (reducer) {
  return action => state => reducer(state, action)
}
