import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Counter from './components/Counter';

import HomePage from './pages/Home';

export default function App() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path='counter' component={Counter} />
      </Route>
    </Router>
  );
}
