import { connectModal } from 'redux-modal';
import AddPostModal from './AddPostModal';
import { ADD_POST_MODAL } from './constants';

export default connectModal({
  name: ADD_POST_MODAL,
  destroyOnHide: false
})(AddPostModal);
