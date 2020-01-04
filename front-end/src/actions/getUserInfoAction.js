import {GET_USER_INFO} from '../actionTypes/ACCOUNT_ACTION';

export function getuserinfo() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token){
      fetch('http://localhost:8008/getUserInfo', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({token})
      })
      .then(res =>res.json())
      .then(postData =>{
        if (postData.message === 'sent user info'){
          dispatch({
            type: GET_USER_INFO,
            payload: postData
          })
        } else{
          console.log('invalid token detected')
          localStorage.removeItem('token')
        }
      })
    }
  }
}