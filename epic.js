import { combineEpics } from 'redux-observable'

import { epic as dogs } from './dogs'

export default combineEpics(
  dogs
)
