import { reduxForm } from 'redux-form';
import PostForm from './PostForm';
import { POST_FORM } from './constants';
import validate from './validate';

export default reduxForm({ form: POST_FORM, validate })(PostForm);
