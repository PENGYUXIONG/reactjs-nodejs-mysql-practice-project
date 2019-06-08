import {SIGN_UP} from '../actionTypes/ACCOUNT_ACTION.js';

export function signup(credential) {
  return (dispatch)=>{
    fetch('http://localhost:8008/signup', {
      method: 'POST',
      headers: {
        'current-type': 'application/json'
      },
      body: JSON.stringfy(credential)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: SIGN_UP,
      payload: post  
    }))
  }
}