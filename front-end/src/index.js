import React from 'react';
import { render } from 'react-dom';
import initStore from './store.js';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupPage from './component/SignupPage';
import SignupSuccessPage from './component/SignupSuccessPage';
import NotFoundPage from './component/NotFoundPage';
import AboutusPage from './component/AboutusPage';
import EditProfilePage from './component/EditProfilePage';
import NoAccessPage from './component/NoAccessPage';
import Home from './component/Home';
import './stylesheet/style.css';


render(
  <Provider store={initStore}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signupSuccess" component={SignupSuccessPage} />
        <Route exact path="/aboutus" component={AboutusPage} />
        <Route exact path="/editprofile" component={EditProfilePage} />
        <Route exact path="/NoAccess" component={NoAccessPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
