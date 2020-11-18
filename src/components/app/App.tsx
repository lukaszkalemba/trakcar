import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from 'views/schedule/Schedule';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import SignUp from 'views/sign-up/SignUp';
import SignIn from 'views/sign-in/SignIn';
import NotFound from 'views/not-found/NotFound';
import Order from 'views/order/Order';
import {
  ordersSelector,
  Order as OrderSchema,
  getAllOrders,
} from 'modules/orders';
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
  const dispatch = useDispatch();
  const { orders } = useSelector(ordersSelector);

  useEffect(() => {
    setFullHeight();
    dispatch(getAllOrders());
  }, []);

  let ordersRoutes = null;

  if (orders?.length) {
    ordersRoutes = (orders as OrderSchema[]).map((order) => {
      return (
        <PrivateRoute
          key={order._id}
          exact
          path={`/orders/${order._id}`}
          Component={() => <Order {...order} />}
        />
      );
    });
  }

  return (
    <Router>
      <Alerts />
      <Switch>
        <PrivateRoute exact path="/" Component={Schedule} />
        <PrivateRoute exact path="/positions" Component={Positions} />
        <PrivateRoute exact path="/organization" Component={Organization} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        {ordersRoutes}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
