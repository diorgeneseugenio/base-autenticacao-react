import { connect } from 'react-redux';

import { logout, getProtected } from 'redux/actions';

import Dashboard from './Dashboard';

const mapStateToProps = store => ({
  isAuthenticated: store.user.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getProtected: () => dispatch(getProtected())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);