import { createAction } from 'redux-actions';

export const setPosts = createAction('posts/SET_POSTS', posts => ({ posts }));

export const fetchPostsRequest = createAction('posts/FETCH_POSTS_REQUEST');
export const fetchPostsFailure = createAction('posts/FETCH_POSTS_FAILURE');

export const addPostRequest = createAction('posts/ADD_POST_REQUEST');

