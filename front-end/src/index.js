import React from 'react';
import { render } from 'react-dom';
import initStore from './store.js';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import SignupPage from './component/SignupPage';
import SignupSuccessPage from './component/SignupSuccessPage';
import NotFoundPage from './component/NotFoundPage';
import AboutusPage from './component/AboutusPage';
import EditProfilePage from './component/EditProfilePage';
import NoAccessPage from './component/NoAccessPage';
import Home from './component/Home';
import RoomPage from './component/RoomPage';

import './stylesheet/style.css';
import ProtectedRoute from './ProtectedRoute';

render(
  <Provider store={initStore}>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signup" component={SignupPage} exact/>
        <Route path="/signupSuccess" component={SignupSuccessPage} exact/>
        <Route path="/aboutus" component={AboutusPage} exact/>
        <ProtectedRoute path="/editprofile" component={EditProfilePage} exact/>
        <Route exact path="/NoAccess" component={NoAccessPage} />
        <ProtectedRoute path="/room" component={RoomPage} exact/>
        <Route path='/404Page' component={NotFoundPage} exact/>
        <Redirect to="/404Page" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
