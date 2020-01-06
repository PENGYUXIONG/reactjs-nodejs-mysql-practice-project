import {UPDATE_USER_INFO} from '../actionTypes/ACCOUNT_ACTION.js'

export function updateuserinfo(newCredential) {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    fetch('http://localhost:8008/updateUserInfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newCredential)
    })
    .then(res => res.json())
    .then(postData =>{ 
      if (postData.message === 'update user info'){
        dispatch({
          type: UPDATE_USER_INFO,
          payload: postData
        })
      } else{
        console.log('invalid token detected')
        localStorage.removeItem('token')
      }
    })
  }
}
