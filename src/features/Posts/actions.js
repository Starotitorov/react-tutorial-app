// @flow

import { createAction } from 'redux-actions';
import { rest } from 'services';
import { createPostModel } from './model';
import { hideAddPostModal } from './AddPostModal/actions';

type PostData = {
  title: string,
  body: string
};

export const setPosts = createAction('posts/SET_POSTS', posts => ({ posts }));

export const fetchPostsRequest = createAction('posts/FETCH_POSTS_REQUEST');
export const fetchPostsFailure = createAction('posts/FETCH_POSTS_FAILURE');

export const fetchPosts = () => (dispatch: Function) => {
  dispatch(fetchPostsRequest());

  return rest.api.fetchPosts()
    .then((posts: Array<Post>) => dispatch(setPosts(posts)))
    .catch(() => dispatch(fetchPostsFailure()));
};

export const addPost = (postData: PostData) => (dispatch: Function) => {
  const post = createPostModel(postData);

  return rest.api.addPost(post)
    .then(() => {
      dispatch(fetchPosts());

      dispatch(hideAddPostModal());
    })
};

