import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Input, Modal } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

import {joinRoomAction} from '../../actions/joinRoomAction';

class JoinRoomModal extends Component {
  constructor(props){
    super(props);
    this.state = { 
      visible: false, 
      roomName: '',
      passWord: ''
    };

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.afterClose = this.afterClose.bind(this);
  }

  onChange(event){
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleOk(event) {
    event.preventDefault();
    this.setState({
      visible: false,
      roomName: '',
      passWord: ''
    });

    const roomInfo = {
      roomName: this.state.roomName,
      passWord: this.state.passWord
    }
    console.log(roomInfo)

    if (!roomInfo.roomName){
      const modal = Modal.warning();

      modal.update({
        title: 'Invalid Room Name',
        content: 'Room name cannot be empty',
      });
    } else{
      this.props.joinRoomAction(roomInfo);
    }
  };

  afterClose(){
    console.log(this.props.room)
    if (this.props.room){
      if(this.props.room.room === 'wrong password'){
        const modal = Modal.warning();
        modal.update({
          title: 'Wrong Password',
          content: 'Wrong Password, please try again',
        });
      } else if(!this.props.room.room){
        const modal = Modal.warning();
          modal.update({
            title: 'Invalid Room Name',
            content: 'Room does not exist, please verify the room name',
          });
      } else{
        localStorage.setItem('roomName', this.props.room.room.name)
        window.location.href = "/room";
      }
    }
    this.props.room = null;
  }

  handleCancel() {
    this.setState({
      visible: false,
      roomName: '',
      passWord: ''
    });
  };

  render() {
    return (
      <div>
        <Link to="#" onClick={this.showModal}>
          Join Room
        </Link>
        <Modal
          title="Create Room"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          afterClose = {this.afterClose}
        >
          <div style={{ marginBottom: 16 }}>
            <Input placeholder="Room Name" name="roomName" onChange={this.onChange} defaultValue=""/>
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <Input placeholder="PassWord" name="passWord" onChange={this.onChange} defaultValue	=""/>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    room: state.room.room
  }
}

export default connect(mapStateToProps, {joinRoomAction})(JoinRoomModal);