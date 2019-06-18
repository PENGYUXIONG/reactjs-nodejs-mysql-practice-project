import React from 'react';
import { render } from 'react-dom';
import initStore from './store.js';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/SignupPage';
import './stylesheet/style.css';

render(
  <Provider store={initStore}>
    <Router>
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
