import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Calendar from 'views/calendar/Calendar';
import Positions from 'views/positions/Positions';
import Organization from 'views/organization/Organization';
import Profile from 'views/profile/Profile';
import NotFound from 'views/not-found/NotFound';
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
