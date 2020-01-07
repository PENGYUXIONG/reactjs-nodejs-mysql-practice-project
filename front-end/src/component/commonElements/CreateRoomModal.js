import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Modal } from 'antd';
import 'antd/dist/antd.css';

import { createRoomAction } from '../../actions/createRoomAction';

class CreateRoomModal extends Component {
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
      this.props.createRoomAction(roomInfo);
      console.log(this.props.roomSavedBoolean)
    }
  };

  afterClose(){
    if (this.props.roomSavedBoolean){
      window.location.href = "/room";
    } else if(this.state.roomName){
      const modal = Modal.warning();

      modal.update({
        title: 'Invalid Room Name',
        content: 'Room name is taken, please take another different room name',
      });
    }
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Link to="#" onClick={this.showModal}>
          Create Room
        </Link>
        <Modal
          title="Create Room"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          afterClose = {this.afterClose}
        >
          <div style={{ marginBottom: 16 }}>
            <Input placeholder="Room Name" name="roomName" onChange={this.onChange}/>
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <Input placeholder="PassWord" name="passWord" onChange={this.onChange}/>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    roomSavedBoolean: state.room.roomSavedBoolean
  }
}

export default connect(mapStateToProps, {createRoomAction})(CreateRoomModal);