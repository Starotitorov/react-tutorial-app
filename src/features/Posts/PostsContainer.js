import { connect } from 'react-redux';
import { compose } from 'recompose';
import { frontloadConnect } from 'react-frontload';
import { getPosts, isPostsFetching } from './selectors';
import { fetchPosts, resetPosts } from './actions';
import PostsView from './PostsView';
import { showAddPostModal } from './AddPostModal/actions';

const frontLoad = async props => await props.fetchPosts();

export default compose(
  connect(
    state => ({ posts: getPosts(state), isFetching: isPostsFetching(state) }),
    { fetchPosts, showAddPostModal, resetPosts }
  ),
  frontloadConnect(frontLoad, {
    onMount: true,
    onUpdate: false
  })
)(PostsView);
