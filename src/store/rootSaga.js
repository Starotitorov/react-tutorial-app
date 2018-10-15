import { all } from 'redux-saga/effects';
import { watchAddPost, watchFetchPosts } from '../features/Posts/sagas';

export default function* rootSaga() {
  yield all([
    watchAddPost(),
    watchFetchPosts()
  ])
};
