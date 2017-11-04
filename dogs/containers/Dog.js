import h from 'react-hyperscript'
import { connect } from 'feathers-action-react'

import Dog from '../components/Dog'

import { actions as dogActions } from '../'

import { getShowProps, getCurrentDogId } from '../getters'

export default connect({
  selector: getShowProps,
  actions: {
    dogs: dogActions
  },
  query: {
    method: dogActions.get,
    id: getCurrentDogId
  }
})(DogContainer)

function DogContainer (props) {
  const nextProps = merge({
    size: 'full'
  }, props)
  return h(Dog, nextProps)
}
