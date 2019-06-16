import React, {Component} from 'react';
import Header from './commonElements/Header.js';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import { login } from '../actions/loginAction.js';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      passWord: ''
     };

     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event){
    event.preventDefault();

    const credential = {
      userName: this.state.userName,
      passWord: this.state.passWord
    };

    this.props.login(credential);
  }

  render(){
    return(
      <div> 
        <div className="header">
          <Header/>
        </div>
        <div className="choiceSection">
          <form onSubmit={this.onSubmit}>
            <div>
            <label> Username:  </label>
            <br/>
              <input
                type="text"
                name="userName"
                onChange={this.onChange}
                value={this.state.userName}/>
              <br/>
            </div>
            <div>
              <label>
                Password:
              </label>
              <br/>
              <input
                type="text"
                name="passWord"
                onChange={this.onChange}
                value={this.state.passWord}/>
            </div>
            <br/>
            <input type="submit" value="log in"/>
          </form>
          </div>
        </div>
    )
  }
}

Home.propTypes = {
  login: propTypes.func.isRequired
};

export default connect(null, {login})(Home);
