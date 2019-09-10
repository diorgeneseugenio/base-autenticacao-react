import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = store => ({
  isAuthenticated: store.user.isAuthenticated
});
  
export default connect(mapStateToProps)(PrivateRoute);