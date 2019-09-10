import React from 'react'
import { Route } from 'react-router-dom'

import CustomPage from 'components/utils/templates/CustomPage'


const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={(props) => (
        (rest.isAuthenticated) ?
          <Component {...props} /> 
        : <CustomPage text="You don't have permission!" buttonText="Login" buttonUrl="/" />
    )} />
  );
};

export default PrivateRoute;