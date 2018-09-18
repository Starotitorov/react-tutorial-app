import { handleActions } from 'redux-actions';
import {
  setPosts,
  fetchPostsFailure,
  fetchPostsRequest,
  resetPosts
} from './actions';

const initialState = {
  isFetching: false,
  posts: null
};

const postsReducer = handleActions({
  [fetchPostsRequest]: state => ({ ...state, isFetching: true }),
  [fetchPostsFailure]: state => ({ ...state, isFetching: false }),
  [setPosts]: (state, { payload: { posts }}) => ({
    ...state,
    posts,
    isFetching: false
  }),
  [resetPosts]: () => initialState
}, initialState);

export default postsReducer;
