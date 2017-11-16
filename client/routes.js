import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginForm from './components/login/LoginForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginForm} />
    <Route path="login" component={LoginForm} />
  </Route>
)
