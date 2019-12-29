import {LOG_IN, SIGN_UP} from '../actionTypes/ACCOUNT_ACTION.js';


const initialState = {
  signedUp: null,
  loggedIn: null,
  signedUpErr: {
    userName: "",
    email: ""
  }
}

export default (state = initialState, action)=> {
  switch (action.type) {
    default:
      return state;
    case LOG_IN:
      return {
        ...state,
        loggedIn: action.payload[0],
        signedUp: action.payload[1],
        userId: action.payload[2],
        userName: action.payload[3]
      };
    case SIGN_UP:
      const isSignedUp = Boolean(action.payload[0] | action.payload[1]);
      return {
        ...state,
        signedUp: isSignedUp,
        signedUpErr: {
          userName: action.payload[0],
          email: action.payload[1]
        },
      };
  };
}