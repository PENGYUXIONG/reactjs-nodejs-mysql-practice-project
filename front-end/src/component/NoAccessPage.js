import React, {Component} from 'react';
import { Alert} from 'react-bootstrap';

import NavBar from './commonElements/Navbar';


class NoAccessPage extends Component{
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div className = "NoAccessPage">
      <NavBar/>
      <main className="pageContent">
        <div>
        <Alert variant="info">
          <Alert.Heading>No Access</Alert.Heading>
          <p>
            You have not log in yet, please log in in order to access more content,
            if you don't have an account, please sign up at <Alert.Link href="/signup">here</Alert.Link>. {<br/>}{<br/>}
          </p>
          <hr />
          <p className="mb-0">
            Have fun with this app!
          </p>
        </Alert>
        </div>
      </main>
      </div>
    )
  }
}

export default NoAccessPage;