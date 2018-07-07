import { reduxForm } from 'redux-form';
import { withProps, compose } from 'recompose';
import PostForm from './PostForm';
import { POST_FORM } from './constants';
import { createViewModel } from './viewModel';
import validate from './validate';

const withViewModel = withProps(() => ({ viewModel: createViewModel() }));

export default compose(
  withViewModel,
  reduxForm({ form: POST_FORM, validate })
)(PostForm);
