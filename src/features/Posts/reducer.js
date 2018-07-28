import { handleActions } from 'redux-actions';
import { setPosts, fetchPostsFailure, fetchPosts } from './actions';

const initialState = {
  isFetching: false,
  posts: []
};

const postsReducer = handleActions({
  [fetchPosts]: state => ({ ...state, isFetching: true }),
  [fetchPostsFailure]: state => ({ ...state, isFetching: false }),
  [setPosts]: (state, { payload: { posts }}) => ({
    ...state,
    posts,
    isFetching: false
  })
}, initialState);

export default postsReducer;
