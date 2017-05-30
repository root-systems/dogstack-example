import { combineEpics } from 'redux-observable'

import { epic as agents } from 'dogstack-agents'
import { epic as dogs } from './dogs'

export default combineEpics(
  agents,
  dogs
)
