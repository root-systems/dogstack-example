import { connect } from 'react-redux'

import SignOut from '../components/signOut'

import { signOut } from '../actions'

export default connect(
  null,
  { signOut }
)(SignOut)
