import { connect } from 'react-redux';

import { login } from 'redux/actions';

import Login from './Login';

const mapStateToProps = store => ({
  msg: store.user.msg
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);