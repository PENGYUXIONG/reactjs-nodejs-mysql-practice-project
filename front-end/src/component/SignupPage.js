import React, {Component} from 'react';

import NavBar from './commonElements/Navbar';
import SignupForm from './commonElements/SignupForm';

class SignupPage extends Component{
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div className="signupPage">
        <NavBar/>
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