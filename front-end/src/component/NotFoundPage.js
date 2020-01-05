import React, {Component} from 'react';
import { Alert} from 'react-bootstrap';

import NavBar from './commonElements/Navbar';


class NotFoundPage extends Component{
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div className="NotFOundPage">
        <NavBar/>
        <main className="pageContent">
          <div>
          <Alert variant="danger">
            <Alert.Heading>ah, snap... The page you are looking for does not exist</Alert.Heading>
            <p>
              you can get back to home page at <Alert.Link href="/">here</Alert.Link>. {<br/>}{<br/>}
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

export default NotFoundPage;