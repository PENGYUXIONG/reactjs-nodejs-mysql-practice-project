import React, {Component} from 'react';
import { Alert} from 'react-bootstrap';

import NavBar from './commonElements/Navbar';


class AboutusPage extends Component{
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div className="AbountusPage">
        <NavBar/>
        <main className="pageContent">
          <div>
          <Alert variant="info">
            <Alert.Heading>Develop by Pengyu</Alert.Heading>
            <p>
              For more projects, please take a look at <Alert.Link href="https://github.com/PENGYUXIONG">here</Alert.Link>. {<br/>}{<br/>}
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

export default AboutusPage;