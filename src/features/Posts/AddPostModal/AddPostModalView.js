import { connectModal } from 'redux-modal';
import { withProps, compose } from 'recompose';
import AddPostModal from './AddPostModal';
import { ADD_POST_MODAL } from './constants';
import { createFormViewModel } from './helpers';

const withFormViewModel = withProps(() => ({ formViewModel: createFormViewModel() }));

export default compose(
  connectModal({
    name: ADD_POST_MODAL,
    destroyOnHide: false
  }),
  withFormViewModel
)(AddPostModal);
