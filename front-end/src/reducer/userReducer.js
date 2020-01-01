import {LOG_IN, SIGN_UP} from '../actionTypes/ACCOUNT_ACTION.js';


const initialState = {
  signedUp: null,
  loggedIn: null,
  signedUpAvailable: {
    userName: true,
    email: true
  }
}

export default (state = initialState, action)=> {
  switch (action.type) {
    default:
      return state;
    case LOG_IN:
      if(action.payload['token']){;
        localStorage.setItem('token', action.payload['token']);
      }
      return {
        ...state,
        loggedIn: action.payload['userInfo'][0],
        signedUp: action.payload['userInfo'][1],
        userId: action.payload['userInfo'][2].id,
        userName: action.payload['userInfo'][2].name,
        email: action.payload['userInfo'][2].email
      };
    case SIGN_UP:
      const isSignedUp = Boolean(action.payload[0] & action.payload[1]);
      return {
        ...state,
        signedUp: isSignedUp,
        signedUpAvailable: {
          userName: action.payload[0],
          email: action.payload[1]
        },
      };
  };
}