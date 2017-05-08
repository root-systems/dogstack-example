import { connect } from 'feathers-action-react'

import Dogs from '../components/dogs'

import { actions as dogActions } from '../'

import { getIndexProps } from '../getters'

export default connect({
  selector: getIndexProps,
  actions: { dogs: dogActions },
  query: {
    service: 'dogs',
    params: {}
  }
})(Dogs)
