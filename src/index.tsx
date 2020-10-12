import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Calendar from 'pages/Calendar/Calendar';
import Positions from 'pages/Positions/Positions';
import Organization from 'pages/Organization/Organization';
import Profile from 'pages/Profile/Profile';
import NotFound from 'pages/NotFound/NotFound';
import 'normalize.css';
import 'styles/global.scss';

const App = () => {
  return (
    <React.StrictMode>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route exact path="/positions" component={Positions} />
            <Route exact path="/organization" component={Organization} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
