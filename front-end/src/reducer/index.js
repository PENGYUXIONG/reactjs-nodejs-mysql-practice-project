import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import roomReducer from './roomReducer';

export default combineReducers({
  user: userReducer,
  room : roomReducer
});