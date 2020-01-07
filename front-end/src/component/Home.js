import React, {Component} from 'react';
import propTypes, { element } from 'prop-types';
import {connect} from 'react-redux';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './commonElements/Navbar';
import { login } from '../actions/loginAction';
import {Link} from 'react-router-dom';
import store from '../store';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      condition: null,
      counter: 0
     };

     store.subscribe(()=>{
       console.log(store.getState());
       
     })

     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.isChecked = this.isChecked.bind(this);
     this.handleAccountStatus = this.handleAccountStatus.bind(this);
  }

  componentWillReceiveProps(){
    console.log(localStorage.getItem('token'))

  }

  isChecked(event){
    this.setState({ [event.target.name]: event.target.checked });
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event){
    event.preventDefault();

    if (!this.state.condition){
      console.log('please agree to the conditions');
    }
    else if(this.state.userName.length < 4 || this.state.passWord.length < 4){
      console.log('Password or Username cannot be shorter than 4 characters')
    }
    else{
      const credential = {
        userName: this.state.userName,
        passWord: this.state.passWord
      };

      this.props.login(credential);
    } 
  }

  handleAccountStatus(){
    let element;    

    let alert;
    if (this.props.signedUp === false){
      alert = <h6 className="log-in-fail-alert">User not exist, please <Link to="/signup">sign up!</Link></h6>
    } else if (this.props.loggedIn === false){
      alert = <h6 className="log-in-fail-alert">Wrong password, please try again</h6>
    }
 

    // conditional rendering according to the login status
    if (localStorage.getItem('token') && localStorage.getItem('token')!=='undefined'){
      element = <h3>Welcome Back! Let's start chatting!"</h3>;
    } else{
      element =       
      <Form onSubmit={this.onSubmit}>
        <h2>Log In</h2>
        <hr />
        <Form.Group controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control required type="text" placeholder="Enter the user name" name="userName" onChange={this.onChange}
          isInvalid={0 < this.state.userName.length && this.state.userName.length < 4}/>
          <Form.Control.Feedback type="invalid">Username cannot be shorter than 4 characters</Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="text" placeholder="Enetr the passWord" name="passWord" onChange={this.onChange}
          isInvalid={0 < this.state.passWord.length && this.state.passWord.length < 4}/>
          <Form.Control.Feedback type="invalid">Password cannot be shorter than 4 characters</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check required type="checkbox" label="I agree to the term of conditions" name="condition" onChange={this.isChecked} 
          isInvalid={this.state.condition === false} feedback="You must agree before submitting."/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        {alert}
      </Form>;
    }
    return element;
  }

  render(){
    let element = this.handleAccountStatus();
    return(
      <div className="mainPage"> 
          <NavBar />
          <main className="pageContent">
            <div className="loginLayout" >
                {element}
              </div>
          </main>
        </div>
    )
  }
}

Home.propTypes = {
  login: propTypes.func.isRequired,
};

function mapStateToProps (state){
  return{
    loggedIn: state.user.loggedIn,
    signedUp: state.user.signedUp
  }
}
export default connect(mapStateToProps, {login})(Home);
