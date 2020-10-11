import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from 'pages/Calendar';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/">
            <Calendar />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
