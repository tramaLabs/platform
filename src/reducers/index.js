import { combineReducers } from 'redux';
import runtime from './runtime';
import initiative from './initiative';

export default combineReducers({
  runtime,
  initiative,
  user: (state = {}) => state
});
