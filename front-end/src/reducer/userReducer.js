import {LOG_IN, SIGN_UP} from '../actionTypes/ACCOUNT_ACTION.js';


const initialState = {
  signedUp: null,
  loggedIn: null,
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
      return {
        ...state,
      };
  };
}