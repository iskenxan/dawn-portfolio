import { combineReducers } from 'redux';
import ReducerSession from './ReducerSession';
import ReducerTumblr from './ReducerTumblr';

export default combineReducers({
  session: ReducerSession,
  tumblr: ReducerTumblr
});
