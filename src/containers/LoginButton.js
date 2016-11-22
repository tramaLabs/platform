import { connect } from 'react-redux'

import LoginButton from '../components/LoginButton'

const mapStatetoProps = (state) =>({ user: state.user})

export default connect(mapStatetoProps)(LoginButton)
