import {CREATE_ROOM, JOIN_ROOM} from '../actionTypes/ACCOUNT_ACTION'

const initialState = {

};

export default (state = initialState, action)=> {
  switch (action.type) {
    default:
      return state;
    case CREATE_ROOM:
      return{
        ...state,
        roomSavedBoolean : action.payload['roomSavedBoolean'],
      }
    case JOIN_ROOM:
      return{
        ...state,
        room : action.payload
      }
  };
}