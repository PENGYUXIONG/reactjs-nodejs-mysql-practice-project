import React, {Component} from 'react';
import { Alert} from 'react-bootstrap';

import NavBar from './commonElements/Navbar';


class SignupSuccessPage extends Component{
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div className="signupPage">
        <NavBar/>
        <main className="pageContent">
          <div>
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, Congrate! you have registered your account and can start using our app
              right away! {<br/>}{<br/>}

              Please don't share your credential with other people. Other than that please enjoy! {<br/>}{<br/>}

              you can log in at <Alert.Link href="/">here</Alert.Link>. {<br/>}{<br/>}

              Have a nice day!
            </p>
            <hr />
            <p className="mb-0">
              Time to make some friends and start to chat!
            </p>
          </Alert>
          </div>
        </main>
      </div>
    )
  }
}

export default SignupSuccessPage;