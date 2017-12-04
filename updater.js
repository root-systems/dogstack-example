import { concat, updateStateAt } from 'redux-fp'
import { routerReducer } from 'react-router-redux'

const router = updateStateAt('router', reducerToUpdater(routerReducer))

export default concat(
  router
)

function reducerToUpdater (reducer) {
  return action => state => reducer(state, action)
}
