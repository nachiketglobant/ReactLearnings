import {combineReducers} from 'redux';
import tasks from './taskReducer';
import categories from './categoryReducer';

const rootReducer = combineReducers({
  // short hand property names
  tasks,
  categories
})

export default rootReducer;