import React from 'react'

import Login from 'components/Login'
import Dashboard from 'components/Dashboard/';

const Authentication = ({ ...props }) => {
  return (props.isAuthenticated) ? <Dashboard /> : <Login />;
};

export default Authentication;