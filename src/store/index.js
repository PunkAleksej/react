import { createStore } from 'redux';
import { allReducer } from './allReducers';

export const store = createStore(allReducer);
