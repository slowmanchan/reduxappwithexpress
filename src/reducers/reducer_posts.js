import {
  FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RESET_POSTS
} from '../actions/posts';

const INITIAL_STATE = { postList: {posts: [], error: null, loading: false}};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, postsList: {posts: [], error: null, loading: true}};
    case FETCH_POSTS_SUCCESS:
      return { ...state, postsList: {posts: action.payload, error: null, loading: false}};
    case FETCH_POSTS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, postsList: {posts: [], error: error, loading: false}};
    case RESET_POSTS:
      return { ...state, postsList: {posts: [], error: null, loading: false}};
      break;
    default:
      return state;
  }
}
