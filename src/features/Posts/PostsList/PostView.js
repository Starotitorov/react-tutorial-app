import { withHandlers } from 'recompose';
import Post from './Post';

export default withHandlers({
  onDelete: ({id, onDelete}) => () => onDelete(id),
})(Post);
