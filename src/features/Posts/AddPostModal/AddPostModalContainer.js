import { connect } from 'react-redux';
import AddPostModalView from './AddPostModalView';
import { submitPostForm } from '../PostForm/actions';
import { isPostFormSubmitting } from '../PostForm/selectors';
import { addPost } from '../actions';
import { isPostButtonDisabled } from './selectors';

export default connect(
  state => ({
    isPostButtonDisabled: isPostButtonDisabled(state),
    isPostFormSubmitting: isPostFormSubmitting(state)
  }),
  { submitPostForm, addPost }
)(AddPostModalView);
