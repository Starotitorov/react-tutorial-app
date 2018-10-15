import { call, put, takeEvery } from 'redux-saga/effects';
import { rest } from 'services';
import { setPosts, fetchPostsFailure, fetchPostsRequest, addPostRequest } from './actions';
import { hideAddPostModal } from './AddPostModal/actions';
import { startSubmitPostForm, stopSubmitPostForm, setSubmitFailedPostForm } from './PostForm/actions';
import { createPostModel } from './model';

function* fetchPosts() {
  try {
    const posts = yield call(rest.api.fetchPosts);
    yield put(setPosts(posts));
  } catch(e) {
    yield put(fetchPostsFailure());
  }
}

function* addPost({ payload }) {
  const post = createPostModel(payload);

  yield put(startSubmitPostForm());

  try {
    yield call(rest.api.addPost, post);

    yield put(stopSubmitPostForm());

    yield put(hideAddPostModal());

    yield put(fetchPostsRequest());
  } catch(e) {
    yield put(setSubmitFailedPostForm());
  }
}

export function* watchFetchPosts() {
  yield takeEvery(fetchPostsRequest.toString(), fetchPosts);
}

export function* watchAddPost() {
  yield takeEvery(addPostRequest.toString(), addPost);
}
