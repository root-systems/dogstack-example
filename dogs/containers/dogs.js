import { connectFeathers } from '../../lib/feathers-action-react'

import Dogs from '../components/dogs'

import { actions as dogActions } from '../'

import { getIndexProps } from '../getters'

export default connectFeathers({
  selector: getIndexProps,
  actions: { dogs: dogActions },
  query: (props) => [{
    resource: 'dogs',
    params: {}
  }]
})(Dogs)
