import { concat, updateStateAt } from 'redux-fp'
import { routerReducer } from 'react-router-redux'

import { updater as authentication } from './authentication'
import { updater as dogs } from './dogs'
import { updater as accounts } from './accounts'

const routing = updateStateAt('routing', reducerToUpdater(routerReducer))

export default concat(
  authentication,
  dogs,
  accounts,
  routing
)

function reducerToUpdater (reducer) {
  return action => state => reducer(state, action)
}
