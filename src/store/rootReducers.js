import { combineReducers } from 'redux';
import userStore from './user/reducer';

export const allReducer = combineReducers({
  todoState: userStore
});
