import { connect } from 'feathers-action-react'

import Dogs from '../components/dogs'

import { actions as dogActions } from '../'

import { getIndexProps } from '../getters'

export default connect({
  selector: getIndexProps,
  actions: { dogs: dogActions },
  query: (props) => ({
    service: 'dogs',
    id
    params: props.match.dogId
  })
})(Dogs)
