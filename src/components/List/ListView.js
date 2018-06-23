import { compose } from 'recompose';
import withLoadingIndicator from './withLoadingIndicator';
import withEmptyList from './withEmptyList';
import List from './List';

export default compose(
  withLoadingIndicator,
  withEmptyList
)(List);
