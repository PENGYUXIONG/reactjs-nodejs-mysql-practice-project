import {CREATE_ROOM} from '../actionTypes/ACCOUNT_ACTION';

export function createRoomAction(roomCredential) {
  return (dispatch) => {
    fetch('http://localhost:8008/createRoom', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(roomCredential)
    })
    .then(res => res.json())
    .then(postData =>{ 
      dispatch({
        type: CREATE_ROOM,
        payload: postData
      })
    })
  }
}