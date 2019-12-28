import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './commonElements/Navbar';
import signup from '../actions/signupAction';
import {Link} from 'react-router-dom';
import sideDrawer from './commonElements/sideDrawer/SideDrawer';
import SignupForm from './commonElements/SignupForm';

class SignupPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="signupPage">
        <NavBar/>
        <sideDrawer/>
        <main className="pageContent">
          <div className="signUpForm">
            <SignupForm/>
          </div>
        </main>
      </div>
    )
  }
}

export default SignupPage;