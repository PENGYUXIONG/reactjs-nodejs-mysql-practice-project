import React, {Component} from 'react';
import { Chat } from '@progress/kendo-react-conversational-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { connect } from 'react-redux';
import io from "socket.io-client";

import { getuserinfo } from '../actions/getUserInfoAction';
import NavBar from './commonElements/Navbar'


class RoomPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };

    this.socket = io("http://localhost:3000").connect();

    this.addNewMessage = this.addNewMessage.bind(this);
    this.receiveNewMessage = this.receiveNewMessage.bind(this);
  }

  

  componentWillMount(){
    this.props.getuserinfo();
    this.socket.on('chat-message', data => {
      data.timestamp = new Date(new Date(data.timestamp).toLocaleString());
      this.receiveNewMessage(data);
    })
  }

  receiveNewMessage(messageObject){
    this.setState((prevState) => {
      return {messages: [...prevState.messages, messageObject]};
    });
  }

  addNewMessage (event) {
    this.socket.emit('user-chat-message', event.message);
    this.setState((prevState) => {
        return { messages: [...prevState.messages, event.message] };
    });
  };

  render() {
    this.user = {
      id: this.props.userInfo.userId,
      name: this.props.userInfo.userName
    };
    return (
        <div className="roomPage">
          <NavBar/>
          <main className="pageContent">
            <div className="chatContent">
              <h6 className="roomName"> Room Name </h6>
              <Chat user={this.user}
                  messages={this.state.messages}
                  onMessageSend={this.addNewMessage}
                  width={400}>
              </Chat>
            </div>
            </main>
        </div>
    );
  }
}

function mapStateToProps (state){
  return{
    userInfo: state.user,
  }
}

export default connect(mapStateToProps, {getuserinfo})(RoomPage);
