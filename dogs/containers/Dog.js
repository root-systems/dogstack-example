import React from 'react'
import { connect } from 'feathers-action-react'

import Dog from '../components/Dog'

import { actions as dogActions } from '../'

import { getShowProps } from '../getters'

export default connect({
  selector: getShowProps,
  actions: { dogs: dogActions },
  query: (props) => ({
    service: 'dogs',
    id: props.match.params.dogId
  })
})(props => <Dog size='full' {...props} />)
