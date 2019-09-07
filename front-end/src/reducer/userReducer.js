import {LOG_IN, SIGN_UP} from '../actionTypes/ACCOUNT_ACTION.js';


const initialState = {
  loggedIn: false
}

export default (state = initialState, action)=> {
  switch (action.type) {
    default:
      return state;
    case LOG_IN:
      return {
        ...state,
        loggedIn: action.payload[0],
        username: action.payload[1]
      };
    case SIGN_UP:
      return {
        ...state,
      };
  };
}