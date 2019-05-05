import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducer/index.js';

const initState = {

};

const middleWare = [thunk];

const initStore = createStore(
  combineReducers,
  initState,
  applyMiddleware(...middleWare)
);



export default initStore;
