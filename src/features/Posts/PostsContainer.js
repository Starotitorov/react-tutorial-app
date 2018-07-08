import { connect } from 'react-redux';
import { getPosts, isPostsFetching } from './selectors';
import { fetchPosts, deletePost } from './actions';
import PostsView from './PostsView';
import { showAddPostModal } from './AddPostModal/actions';

export default connect(
  state => ({ posts: getPosts(state), isFetching: isPostsFetching(state) }),
  { fetchPosts, showAddPostModal, deletePost }
)(PostsView);
