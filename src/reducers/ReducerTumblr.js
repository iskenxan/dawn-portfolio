import {
  FETCH_SUCCESS,
  FETCH_LOADING
 } from '../actions/ActionTumblr';

const initialState = {
  posts: {
    'front-page': [],
    'portfolio-fashion': [],
    'portfolio-portrait': [],
    'portfolio-still-life': [],
  },

  loading: {
    'front-page': false,
    'portfolio-fashion': false,
    'portfolio-portrait': false,
    'portfolio-still-life': false
  }
}


export default function( state = initialState, action) {
  switch (action.type) {
    case FETCH_LOADING: {
      const tag = action.payload;
      const loading = { ...state.loading, [tag]: true };
      return { ...state, loading }
    }
    case FETCH_SUCCESS: {
      const { tag, posts } = action.payload;
      const loading = { ...state.loading, [tag]: false };
      const newPosts = { ...state.posts, [tag]: posts }
      return { ...state, posts: newPosts, loading };
    }
    default:
    return state;
  }
}
