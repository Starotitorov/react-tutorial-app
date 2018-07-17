import { combineValidators } from 'revalidate';
import {
  POST_FORM_TITLE_FIELD,
  POST_FORM_BODY_FIELD
} from './constants';
import { validator } from 'services';

export default combineValidators({
  [POST_FORM_TITLE_FIELD]: validator.required('Title'),
  [POST_FORM_BODY_FIELD]: validator.required('Body')
});
