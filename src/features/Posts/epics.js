import { mergeMap, catchError, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';
import { rest } from 'services';
import { setPosts, fetchPosts, fetchPostsFailure, addPost } from './actions';
import { createPostModel } from './model';
import { hideAddPostModal } from './AddPostModal/actions';

const fetchPostsEpic = action$ => action$.pipe(
  ofType(fetchPosts.toString()),
  mergeMap(
    () => from(rest.api.fetchPosts()).pipe(
      map(posts => setPosts(posts)),
      catchError(() => fetchPostsFailure())
    )
  )
);

const addPostEpic = action$ => action$.pipe(
  ofType(addPost.toString()),
  mergeMap(
    ({ payload: { postData }}) => from(rest.api.addPost(createPostModel(postData))).pipe(
      mergeMap(() => [
        fetchPosts(),
        hideAddPostModal()
      ])
    )
  )
);

export default combineEpics(
  fetchPostsEpic,
  addPostEpic
);
