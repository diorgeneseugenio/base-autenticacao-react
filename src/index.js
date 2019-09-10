import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';
import Authentication from './components/utils/functional/Authentication';

import PrivateRoute from './components/utils/functional/PrivateRoute'
import CustomPage from './components/utils/templates/CustomPage'

import { store } from './redux/store';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Authentication} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />          
          <Route path="*" component={() =>  <CustomPage text="404 - Page not found!" buttonText="Home" buttonUrl="/" /> } />
        </Switch>
      </Router>
    </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
