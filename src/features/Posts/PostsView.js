// @flow

import { lifecycle } from 'recompose';
import Posts from './Posts';

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.fetchPosts();
  }
});

export default withLifecycle(Posts);
