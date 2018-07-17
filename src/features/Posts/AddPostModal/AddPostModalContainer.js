import { connect } from 'react-redux';
import AddPostModalView from './AddPostModalView';
import { submitPostForm } from '../PostForm/actions';
import { addPost } from '../actions';
import { isPostButtonDisabled } from './selectors';

export default connect(
  state => ({ isPostButtonDisabled: isPostButtonDisabled(state) }),
  { submitPostForm, addPost }
)(AddPostModalView);
