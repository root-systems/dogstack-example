import { combineEpics } from 'redux-observable'

import { epic as authentication } from './authentication'
import { epic as dogs } from './dogs'
import { epic as accounts } from './accounts'

export default combineEpics(
  authentication,
  dogs,
  accounts
)
