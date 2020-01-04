import {LOG_IN, SIGN_UP, LOG_OUT, GET_USER_INFO} from '../actionTypes/ACCOUNT_ACTION.js';


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
      return {
        ...state,
        loggedIn: action.payload['userBoolean'][0],
        signedUp: action.payload['userBoolean'][1]
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
    case LOG_OUT:
      return {
        signedUp: null,
        loggedIn: null,
        signedUpAvailable: {
          userName: true,
          email: true
        }
      };
    case GET_USER_INFO:
      return{
        ...state,
        userId: action.payload['authData'].user.id,
        userName: action.payload['authData'].user.name,
        userEmail: action.payload['authData'].user.email
      }
  };
}