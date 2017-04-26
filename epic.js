import { combineEpics } from 'redux-observable'

import { epic as dogs } from './dogs'
import { epic as account } from './account'

export default combineEpics(
  dogs,
  account
)
