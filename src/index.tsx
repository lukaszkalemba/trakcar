import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signupSliceReducer, { SignupState } from 'modules/users/signup';
import Calendar from 'views/calendar/Calendar';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import Profile from 'views/profile/Profile';
import SignUp from 'views/sign-up/SignUp';
import SignIn from 'views/sign-in/SignIn';
import NotFound from 'views/not-found/NotFound';
import 'normalize.css';
import 'styles/global.scss';

export type AppThunk = ThunkAction<void, SignupState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    signup: signupSliceReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route exact path="/positions" component={Positions} />
            <Route exact path="/organization" component={Organization} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
