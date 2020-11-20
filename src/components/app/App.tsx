import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Schedule from 'views/schedule/Schedule';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import SignUp from 'views/sign-up/SignUp';
import SignIn from 'views/sign-in/SignIn';
import NotFound from 'views/not-found/NotFound';
import Order from 'views/order/Order';
import { setFullHeight } from 'helpers/setFullHeight';
import { setAuthToken } from 'helpers/setAuthToken';
import Alerts from './alerts/Alerts';
import PrivateRoute from './private-route/PrivateRoute';
import 'normalize.css';
import 'styles/global.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    setFullHeight();
  }, []);

  return (
    <Router>
      <Alerts />
      <Switch>
        <PrivateRoute exact path="/" component={Schedule} />
        <PrivateRoute exact path="/positions" component={Positions} />
        <PrivateRoute exact path="/organization" component={Organization} />
        <PrivateRoute path="/orders/:id" component={Order} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
