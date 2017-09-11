import { connect } from 'react-redux'

import Home from '../components/Home'

import { getHomeProps } from '../getters'

export default connect(
  getHomeProps
)(Home)
