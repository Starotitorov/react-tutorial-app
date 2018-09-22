// @flow

import { handleActions } from 'redux-actions';
import { setPosts, fetchPostsFailure, fetchPostsRequest } from './actions';

type State = {
  isFetching: boolean,
  posts: Array<Post>
};

const initialState: State = {
  isFetching: false,
  posts: []
};

const postsReducer = handleActions({
  [fetchPostsRequest]: (state: State) => ({ ...state, isFetching: true }),
  [fetchPostsFailure]: (state: State) => ({ ...state, isFetching: false }),
  [setPosts]: (state: State, { payload: { posts }}: Object) => ({
    ...state,
    posts,
    isFetching: false
  })
}, initialState);

export default postsReducer;
