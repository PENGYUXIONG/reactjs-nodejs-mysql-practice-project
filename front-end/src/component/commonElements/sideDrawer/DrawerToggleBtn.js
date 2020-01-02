import React, {Component} from 'react';
import { Drawer, Avatar } from 'antd';
import '../../../stylesheet/style.css';
import 'antd/dist/antd.css';

import { Link } from 'react-router-dom';

class DrawerToggleBtn extends Component {

  constructor(props){
    super(props);
    this.state = { visible: false };
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer() {
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
      return(
        <div>
          <button className = "toggleBtn" onClick={this.showDrawer}>
            <div className='toggleBtn-line'/>
            <div className='toggleBtn-line'/>
            <div className='toggleBtn-line'/>
          </button>
            <Drawer
            title={<div><Avatar> user </Avatar> <h6># {}</h6></div>}
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            >
            <Link to="/Room/{#id}"> Create Room </Link>
            <br/>
            <Link to="/Room/{id:}"> Join Room </Link>
          </Drawer>
        </div>
      )
    }
}

export default DrawerToggleBtn;