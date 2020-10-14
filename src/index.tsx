import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from 'views/calendar/Calendar';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import Profile from 'views/profile/Profile';
import SignUp from 'views/sign-up/SignUp';
import SignIn from 'views/sign-in/SignIn';
import NotFound from 'views/not-found/NotFound';
import 'normalize.css';
import 'styles/global.scss';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route exact path="/positions" component={Positions} />
          <Route exact path="/organization" component={Organization} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
