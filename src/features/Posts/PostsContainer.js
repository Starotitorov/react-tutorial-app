import { connect } from 'react-redux';
import { getPosts, isPostsFetching } from './selectors';
import { fetchPosts } from './actions';
import PostsView from './PostsView';

export default connect(
  state => ({ posts: getPosts(state), isFetching: isPostsFetching(state) }),
  { fetchPosts }
)(PostsView);
