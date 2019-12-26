import React, {Component} from 'react';
import propTypes, { element } from 'prop-types';
import {connect} from 'react-redux';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './commonElements/Navbar';
import { login } from '../actions/loginAction';
import store from '../store';
import sideDrawer from './commonElements/sideDrawer/SideDrawer'


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      passWord: ''
     };

     store.subscribe(()=>{
       console.log(store.getState());
     })

     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.isChecked = this.isChecked.bind(this);
     this.handleAccountStatus = this.handleAccountStatus.bind(this);
  }

  isChecked(event){
    this.props.Checked = event.target.checked;
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event){
    event.preventDefault();

    if (!this.props.Checked){
      console.log('please agree to the condition')
    }
    else if(this.state.userName.length === 0 || this.state.passWord.length === 0){
      console.log('userName and password cannot be empty')
    }
    else{
      const credential = {
        userName: this.state.userName,
        passWord: this.state.passWord
      };

      this.props.login(credential);
    } 
  }

  handleAccountStatus(props){
    let element;
    const isLoggedIn = props.loggedIn;

    // conditional rendering according to the login status
    if (isLoggedIn){
      element = 0;
    } else{
      element =       
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter the user name" name="userName" onChange={this.onChange}/>
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enetr the passWord" name="passWord" onChange={this.onChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the term of conditions" onChange={this.isChecked}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>;
    }
    return element;
  }

  render(){
    let element = this.handleAccountStatus(this.props);
    return(
      <div className="mainPage"> 
          <NavBar />
          <sideDrawer />
          <main className="choiceSection">
            <div className="loginLayout" >
                {element}
              </div>
          </main>
        </div>
    )
  }
}

Home.propTypes = {
  login: propTypes.func.isRequired
};

function mapStateToProps (state){
  return{
    loggedIn: state.user.loggedIn
  }
}
export default connect(mapStateToProps, {login})(Home);
