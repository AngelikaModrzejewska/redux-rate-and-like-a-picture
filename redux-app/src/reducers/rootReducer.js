import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { likesReducer } from './likesReducer';

export const rootReducer = combineReducers({
  rates: appReducer,
  likes: likesReducer,
});