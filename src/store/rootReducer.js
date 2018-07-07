import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';
import posts from '../features/Posts/reducer';

export default combineReducers({
  posts,
  form,
  modal
})
