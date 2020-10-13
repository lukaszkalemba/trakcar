import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from 'views/calendar/Calendar';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import Profile from 'views/profile/Profile';
import Signup from 'views/signup/Signup';
import Signin from 'views/signin/Signin';
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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
