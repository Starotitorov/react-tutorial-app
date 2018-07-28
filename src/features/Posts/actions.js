import { createAction } from 'redux-actions';

export const setPosts = createAction('posts/SET_POSTS', posts => ({ posts }));

export const fetchPosts = createAction('posts/FETCH_POSTS');
export const fetchPostsFailure = createAction('posts/FETCH_POSTS_FAILURE');

export const addPost = createAction(
  'posts/ADD_POST',
  postData => ({ postData })
);

