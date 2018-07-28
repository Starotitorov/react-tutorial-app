import { combineEpics } from 'redux-observable';
import postsEpics from '../features/Posts/epics';

export default combineEpics(
  postsEpics
);
