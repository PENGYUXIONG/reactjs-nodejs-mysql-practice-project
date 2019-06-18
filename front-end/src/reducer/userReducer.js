import {LOG_IN, SIGN_UP} from '../actionTypes/ACCOUNT_ACTION.js';


const initialState = {

}

export default (state = initialState, action)=> {
  switch (action.type) {
    default:
      return state;
    case LOG_IN:
      return {
        ...state,
        items: action.payload
      };
    case SIGN_UP:
      return {
        ...state,
        items: action.payload
      };
  };
}