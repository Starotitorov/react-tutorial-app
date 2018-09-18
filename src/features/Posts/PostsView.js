import { lifecycle } from 'recompose';
import Posts from './Posts';

const withLifecycle = lifecycle({
  componentDidMount() {
    if (!this.props.posts) {
      this.props.fetchPosts();
    }
  },

  componentWillUnmount() {
    this.props.resetPosts();
  }
});

export default withLifecycle(Posts);
