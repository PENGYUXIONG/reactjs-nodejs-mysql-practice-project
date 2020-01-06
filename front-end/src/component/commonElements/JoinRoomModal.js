import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Input, Modal } from 'antd';
import 'antd/dist/antd.css';

class JoinRoomModal extends Component {
  constructor(props){
    super(props);
    this.state = { 
      visible: false, 
      roomId: '',
      passWord: ''
    };

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
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
      roomId: this.state.roomId,
      passWord: this.state.passWord
    }
    console.log(roomInfo)
    window.location.href = "/room";
  };

  handleCancel() {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Link to="#" onClick={this.showModal}>
          Join Room
        </Link>
        <Modal
          title="Join Room"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ marginBottom: 16 }}>
            <Input placeholder="Room id" name="roomId" onChange={this.onChange}/>
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <Input placeholder="PassWord" name="passWord" onChange={this.onChange}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default JoinRoomModal;