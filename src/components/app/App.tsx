import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from 'views/schedule/Schedule';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import SignUp from 'views/sign-up/SignUp';
import SignIn from 'views/sign-in/SignIn';
import NotFound from 'views/not-found/NotFound';
import Order from 'views/order/Order';
import usersReducer, { UsersState } from 'modules/users';
import organizationsReducer, { OrganizationState } from 'modules/organizations';
import positionsReducer, { PositionsState } from 'modules/positions';
import ordersReducer, {
  ordersSelector,
  getAllOrders,
  OrdersState,
} from 'modules/orders';
import alertsReducer, { Alert } from 'modules/alerts';
import calendarDatesReducer, {
  CalendarDatesState,
} from 'modules/calendar-dates';
import { setFullHeight } from 'helpers/setFullHeight';
import { setAuthToken } from 'helpers/setAuthToken';
import Alerts from './alerts/Alerts';
import PrivateRoute from './private-route/PrivateRoute';
import 'normalize.css';
import 'styles/global.scss';

interface StateSchema {
  users: UsersState;
  organizations: OrganizationState;
  positions: PositionsState;
  orders: OrdersState;
  calendarDates: CalendarDatesState;
  alerts: Alert[];
}

export type AppThunk = ThunkAction<void, StateSchema, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    users: usersReducer,
    organizations: organizationsReducer,
    positions: positionsReducer,
    orders: ordersReducer,
    calendarDates: calendarDatesReducer,
    alerts: alertsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector(ordersSelector);

  useEffect(() => {
    setFullHeight();
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <Router>
      <Alerts />
      <Switch>
        <PrivateRoute exact path="/" Component={Schedule} />
        <PrivateRoute exact path="/positions" Component={Positions} />
        <PrivateRoute exact path="/organization" Component={Organization} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        {orders.map((order) => {
          return (
            <PrivateRoute
              key={order._id}
              exact
              path={`/orders/${order._id}`}
              Component={() => <Order {...order} />}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
