import {SIGN_UP} from '../actionTypes/ACCOUNT_ACTION.js';

export function signup(credential) {
  return (dispatch)=>{
    fetch('http://localhost:8008/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credential)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: SIGN_UP,
      payload: post  
    }))
  }
}