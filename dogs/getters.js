import { createSelector, createStructuredSelector } from 'reselect'
import { prop } from 'ramda'

export const getDogs = (state) => state.dogs
export const getCurrentDogId = (state, props) => props.match.params.dogId

export const getCurrentDog = createSelector(
  getCurrentDogId,
  getDogs,
  prop
)

export const getIndexProps = createStructuredSelector({
  dogs: getDogs
})


export const getShowProps = createStructuredSelector({
  dog: getCurrentDog
})
