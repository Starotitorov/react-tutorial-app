import { submit } from 'redux-form';
import { POST_FORM } from './constants';

export const submitPostForm = () => submit(POST_FORM);
