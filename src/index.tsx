import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Calendar from 'pages/Calendar';
import Positions from 'pages/Positions';
import Organization from 'pages/Organization';
import Profile from 'pages/Profile';
import NotFound from 'pages/NotFound';
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
