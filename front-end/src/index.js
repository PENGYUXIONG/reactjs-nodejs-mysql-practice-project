import React from 'react';
import { render } from 'react-dom';
import initStore from './store.js';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupPage from './component/SignupPage';
import SignupSuccessPage from './component/SignupSuccessPage'
import Home from './component/Home';
import './stylesheet/style.css';

render(
  <Provider store={initStore}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signupSuccess" component={SignupSuccessPage} />
        <Route component={SignupPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
