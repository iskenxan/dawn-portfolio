import { combineReducers } from 'redux';
import ReducerSession from './ReducerSession';
import ReducerTumblr from './ReducerTumblr';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  session: ReducerSession,
  tumblr: ReducerTumblr,
  form: formReducer
});
