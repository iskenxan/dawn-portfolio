
import { LOG_IN } from '../actions/ActionSession';
import { LOG_OUT } from '../actions/ActionSession';

export default function( state = { loggedIn: false }, action) {
  switch (action.type) {
    case LOG_IN: {
      return { loggedIn: true };
    }
    case LOG_OUT: {
      return { loggedIn: false };
    }
    default:
      return state;
  }
}
