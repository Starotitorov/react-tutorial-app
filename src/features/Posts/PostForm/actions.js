import { submit, startSubmit, stopSubmit, setSubmitFailed } from 'redux-form';
import { POST_FORM } from './constants';

export const submitPostForm = () => submit(POST_FORM);

export const startSubmitPostForm = () => startSubmit(POST_FORM);

export const stopSubmitPostForm = () => stopSubmit(POST_FORM);

export const setSubmitFailedPostForm = () => setSubmitFailed(POST_FORM);
