import { connect } from 'react-redux';

import { login } from 'redux/actions';

import Authentication from './Authentication';

const mapStateToProps = store => ({
  isAuthenticated: store.user.isAuthenticated
});

const mapDispatchToProps = {
  login
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);