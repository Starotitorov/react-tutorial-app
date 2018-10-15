import { connect } from 'react-redux';
import AddPostModalView from './AddPostModalView';
import { submitPostForm } from '../PostForm/actions';
import { addPostRequest } from '../actions';
import { isPostButtonDisabled } from './selectors';

export default connect(
  state => ({ isPostButtonDisabled: isPostButtonDisabled(state) }),
  { addPost: addPostRequest, submitPostForm }
)(AddPostModalView);
