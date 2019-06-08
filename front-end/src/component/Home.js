import React, {Component} from 'react';
import Header from './commonElements/Header.js';
import LoginSignupBlock from '../component/LoginSignupBlock'

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div> 
        <div className="header">
          <Header/>
        </div>
        <div className="loginLayout">
          <LoginSignupBlock/>
        </div>
      </div>
    )
  }
}

export default Home;
