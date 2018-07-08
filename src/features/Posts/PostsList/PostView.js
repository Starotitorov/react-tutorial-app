import { withHandlers } from 'recompose';
import Post from './Post';

export default withHandlers({
  deletePost: ({id, deletePost}) => () => deletePost(id),
})(Post);
