import {LOG_IN} from '../actionTypes/ACCOUNT_ACTION.js'

export function login(credential) {
  return (dispatch) => {
    fetch('http://localhost:8008/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credential)
    })
    .then(res => res.json())
    .then(postData =>{ 
      localStorage.setItem('token', postData['token']);
      dispatch({
        type: LOG_IN,
        payload: postData
      })
    })
  }
}
