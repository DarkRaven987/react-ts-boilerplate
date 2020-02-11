import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';

export default (props: any) => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </Router>
);