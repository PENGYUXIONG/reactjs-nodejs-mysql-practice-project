import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Col, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {signup} from '../../actions/signupAction';

import store from '../../store';

class SignupForm extends Component{
  constructor(props){
    super(props);
    this.state= {
      userName: '',
      passWord: '' ,
      email: '',
      passWord1: ''
    };

    store.subscribe(()=>{
       console.log(store.getState());
       
    })

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isSignUpValid = this.isSignUpValid.bind(this);
  }
  
  
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event, props){
    event.preventDefault();
    const emailPattern =
    new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
    if (this.state.userName.length < 4){
      console.log('username cannot be shorter than 4 characters')
    } else if(this.state.passWord.length < 4){
      console.log('password cannot be shorter than 4 characters')
    } else if(!emailPattern.test(this.state.email)){
      console.log('email is invalid')
    }else{
      const credential = {
        userName: this.state.userName,
        passWord: this.state.passWord,
        email: this.state.email
      }
      this.props.signup(credential);
    }
  };

  isSignUpValid(props){
    console.log(props)
  }

  render() {
    const emailPattern = 
    new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
    this.isSignUpValid(this.props);
    return(
    <Form noValidate onSubmit={this.handleSubmit}>
      <h2>Sign Up</h2>
      <hr />
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="userName"
              isInvalid={0 < this.state.userName.length && this.state.userName.length < 4}
              onChange={this.onChange}
              required
              
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username that is longer than 4 characters.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
  
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={this.onChange} name="email" 
          isInvalid={!emailPattern.test(this.state.email) && this.state.email} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password"  onChange={this.onChange} name="passWord" 
          isInvalid={0 < this.state.passWord.length && this.state.passWord.length < 4} required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password that is longer than 4 characters.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" placeholder="Condirm Password" onChange={this.onChange} name="passWord1" 
          isInvalid={this.state.passWord1 !== this.state.passWord} required />
          <Form.Control.Feedback type="invalid">
            Password does not match... Please enter password again.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Sign up</Button>
    </Form>
    )
  }
}

function mapStateToProps (state){
  return{
    signedUp: state.user.signedUp
  }
}

export default connect(mapStateToProps, {signup})(SignupForm);