import React from 'react';
import { render } from 'react-dom';
import initStore from './store.js';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/Home.js';
import './stylesheet/style.css';

render(
  <Provider store={initStore}>
    <Router>
      <Route path="/:filter?" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
)