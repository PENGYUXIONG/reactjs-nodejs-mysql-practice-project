import React, {Component} from 'react';
import { Drawer, Avatar } from 'antd';
import '../../../stylesheet/style.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getuserinfo } from '../../../actions/getUserInfoAction';
import CreateRoomModal from '../CreateRoomModal';
import JoinRoomModal from '../JoinRoomModal';

class DrawerToggleBtn extends Component {

  constructor(props){
    super(props);
    this.state = { visible: false };
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer() {
    this.props.getuserinfo();
    if (localStorage.getItem('token')){
      this.setState({
        visible: true,
      });
    }
  };

  onClose() {
    this.setState({
      visible: false,
    });
  };

  render(){
      console.log(this.props)
      return(
        <div>
          <button className = "toggleBtn" onClick={this.showDrawer}>
            <div className='toggleBtn-line'/>
            <div className='toggleBtn-line'/>
            <div className='toggleBtn-line'/>
          </button>
            <Drawer
            title={<div><Avatar> {this.props.userInfo.userName} </Avatar> <h6> {this.props.userInfo.userName} 
            </h6> <h6>id: {this.props.userInfo.userId}</h6></div>}
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            >
            <CreateRoomModal/>
            <JoinRoomModal/>
            <Link to="/editprofile"> Edit Profile </Link>
          </Drawer>
        </div>
      )
    }
}

function mapStateToProps (state){
  return{
    userInfo: state.user,
  }
}

export default connect(mapStateToProps, {getuserinfo})(DrawerToggleBtn);