import { createAction } from 'redux-actions';
import { rest } from 'services';

export const setPosts = createAction('posts/SET_POSTS', posts => ({ posts }));

export const fetchPostsRequest = createAction('posts/FETCH_POSTS_REQUEST');
export const fetchPostsFailure = createAction('posts/FETCH_POSTS_FAILURE');

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest());

  rest.api.fetchPosts()
    .then((posts) => dispatch(setPosts(posts)))
    .catch(() => dispatch(fetchPostsFailure()));
};
