import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from 'views/calendar/Calendar';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import Profile from 'views/profile/Profile';
import SignUp from 'views/sign-up/SignUp';
import SignIn from 'views/sign-in/SignIn';
import NotFound from 'views/not-found/NotFound';
import usersReducer, { User } from 'modules/users';
import alertsReducer, { Alert } from 'modules/alerts';
import { setAuthToken } from 'helpers/setAuthToken';
import PrivateRoute from './private-route/PrivateRoute';
import 'normalize.css';
import 'styles/global.scss';

interface StateSchema {
  users: User;
  alerts: Alert[];
}

export type AppThunk = ThunkAction<void, StateSchema, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    users: usersReducer,
    alerts: alertsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" Component={Calendar} />
          <PrivateRoute exact path="/positions" Component={Positions} />
          <PrivateRoute exact path="/organization" Component={Organization} />
          <PrivateRoute exact path="/profile" Component={Profile} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
