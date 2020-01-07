import {JOIN_ROOM} from '../actionTypes/ACCOUNT_ACTION';

export function joinRoomAction(roomCredential) {
  return (dispatch) => {
    fetch('http://localhost:8008/joinRoom', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(roomCredential)
    })
    .then(res => res.json())
    .then(postData =>{
      dispatch({
        type: JOIN_ROOM,
        payload: postData
      })
    })
  }
}