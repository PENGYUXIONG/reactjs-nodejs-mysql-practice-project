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

    const roomName = localStorage.getItem('roomName');
    this.state = {
      users: [],
      join: false,
      roomName: roomName,
      messages: []
    }; 

    this.socket = io("http://localhost:3000").connect();

    this.addNewMessage = this.addNewMessage.bind(this);
    this.receiveNewMessage = this.receiveNewMessage.bind(this);
  }

  componentDidUpdate(){
    if (!this.state.join){
      this.socket.emit('user-join', {userName: this.props.userInfo.userName, roomName: this.state.roomName});
      this.state.join = true;
    }
  }

  componentWillMount(){
    this.props.getuserinfo();

    this.socket.on('chat-message', data => {
      data.timestamp = new Date(new Date(data.timestamp).toLocaleString());
      this.receiveNewMessage(data);
    })

    this.socket.on('new-user', userName => {
      console.log(`${userName} join`)
      this.state.users.push(userName);
    })

    this.socket.on('user-left', userName => {
      console.log(`${userName} left`)
      this.state.users.pop(userName);
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

    console.log(this.state.users)

    return (
        <div className="roomPage">
          <NavBar/>
          <main className="pageContent">
            <div className="chatContent">
              <h6 className="roomName"> {this.state.roomName} </h6>
               <h6>{this.state.users}</h6>
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
