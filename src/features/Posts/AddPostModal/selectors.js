import { isPostFormInvalid, isPostFormSubmitting } from '../PostForm/selectors';

export const isPostButtonDisabled = state =>
  isPostFormSubmitting(state) || isPostFormInvalid(state);
