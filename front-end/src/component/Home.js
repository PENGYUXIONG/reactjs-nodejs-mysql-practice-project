import React, {Component} from 'react';
import Header from './commonElements/Header';
import NavBar from './commonElements/Navbar';
import sideDrawer from './commonElements/sideDrawer/SideDrawer'
import defaultLoginBtn from './commonElements/DefaultLoginBtn';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import { login } from '../actions/loginAction';
import store from '../store';

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
     this.handleAccountStatus = this.handleAccountStatus.bind(this);
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

  handleAccountStatus(props){
    const IsloggedIn = props.IsloggedIn;
    if (IsloggedIn){
      return 0;
    }

  }

  render(){
    return(
      <div className="mainPage"> 
          <NavBar />
          <sideDrawer />
          <main className="choiceSection">
            <div className="loginLayout">
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
