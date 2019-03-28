import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class UserBtn extends Component{
  constructor(props){
    super(props);
    this.state = {redirect: false};
    this.onClickHandle = this.onClickHandle.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  onClickHandle(){
    this.setState({
      redirect: true
    })
  }
  renderRedirect(){
    if (this.state.redirect){
      return <Redirect to='/login' />
    }
  }
  render(){
    return(
      <div>
        {this.renderRedirect()}
        <button onClick={this.onClickHandle}>{this.props.usage}</button>
      </div>
    );
  }
}
export default UserBtn;
