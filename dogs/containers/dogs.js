import { connect as connectRedux } from 'react-redux'

import Dogs from '../components/dogs'

import { actions } from '../'

import { getIndexProps } from '../getters'

export default connectRedux(
  getIndexProps,
  {
    createDog: actions.create,
    findDogs: actions.find,
    updateDog: actions.update,
    removeDog: actions.remove
  }
)(Dogs)
