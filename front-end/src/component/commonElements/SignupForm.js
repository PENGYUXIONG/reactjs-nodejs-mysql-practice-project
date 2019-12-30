import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {signup} from '../../actions/signupAction';

class SignupForm extends Component{
  constructor(props){
    super(props);
    this.state= {
      signedUp: false,
      userName: '',
      passWord: '' ,
      email: '',
      passWord1: '',
      userNameAvilable: true,
      emailAvilable: true
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps){

    if (nextProps.signedUpAvailable.userName !== this.props.signedUpAvailable.userName){
        this.setState({userNameAvilable: nextProps.signedUpAvailable.userName});
      }  else if(!nextProps.signedUpAvailable.userName && !this.props.signedUpAvailable.userName && this.state.userNameAvilable){
        this.setState({userNameAvilable: false});
      }

    if (nextProps.signedUpAvailable.email !== this.props.signedUpAvailable.email){
      this.setState({emailAvilable: nextProps.signedUpAvailable.email});
    }  else if(!nextProps.signedUpAvailable.email && !this.props.signedUpAvailable.email && this.state.emailAvilable){
      this.setState({emailAvilable: false});
    }
  }
  
  componentWillReceiveProps(nextProps){
    if (nextProps.signedUp === true){
      window.location.href = "/SignupSuccess";
    }
  }

  onChange(event) {
    if (event.target.name == 'email'){
      this.setState({emailAvilable: true});
    } else if (event.target.name == 'userName'){
      this.setState({userNameAvilable: true});
    }
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
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
      this.setState({userNameAvilable: true});
      this.setState({emailAvilable: true});

      const credential = {
        userName: this.state.userName,
        passWord: this.state.passWord,
        email: this.state.email
      }
      this.props.signup(credential);
    }
  };

  render() {

    let userNameErrMsg = "Please choose a username that is longer than 4 characters.";
    let emailErrMsg = "Please provide a valid Email.";

    const emailPattern = 
    new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!this.state.userNameAvilable && this.state.userName.length >= 4){
      userNameErrMsg = "Username already exist.";
    } 

    if (!this.state.emailAvilable && emailPattern.test(this.state.email)){
      emailErrMsg = "Email already exist." 
    }

    return(
    <Form onSubmit={this.handleSubmit}>
      <h2>Sign Up</h2>
      <hr />
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="userName"
              isInvalid={0 < this.state.userName.length && this.state.userName.length < 4 || this.state.userNameAvilable == false}
              onChange={this.onChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              {userNameErrMsg}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={this.onChange} name="email" 
          isInvalid={!emailPattern.test(this.state.email) && this.state.email || this.state.emailAvilable == false} required />
          <Form.Control.Feedback type="invalid">
            {emailErrMsg}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password"  onChange={this.onChange} name="passWord" 
          isInvalid={0 < this.state.passWord.length && this.state.passWord.length < 4} required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password that is longer than 4 characters.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" placeholder="Condirm Password" onChange={this.onChange} name="passWord1" 
          isInvalid={this.state.passWord1 !== this.state.passWord} required />
          <Form.Control.Feedback type="invalid">
            Password does not match... Please enter password again.
          </Form.Control.Feedback>
        </Form.Group>
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
    signedUp: state.user.signedUp,
    signedUpAvailable: state.user.signedUpAvailable
  }
}

export default connect(mapStateToProps, {signup})(SignupForm);