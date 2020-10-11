import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from 'pages/Calendar';
import Positions from 'pages/Positions';
import Organization from 'pages/Organization';
import Profile from 'pages/Profile';
import 'styles/index.scss';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Calendar />
          </Route>
          <Route exact path="/positions">
            <Positions />
          </Route>
          <Route exact path="/organization">
            <Organization />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
