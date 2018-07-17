import { isInvalid, isSubmitting } from 'redux-form';
import { POST_FORM } from './constants';

export const isPostFormSubmitting = isSubmitting(POST_FORM);

export const isPostFormInvalid = isInvalid(POST_FORM);
