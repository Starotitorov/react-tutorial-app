import { POST_FORM_BODY_FIELD, POST_FORM_TITLE_FIELD } from '../PostForm/constants';

export const createFormViewModel = () => ({
  body: {
    name: POST_FORM_BODY_FIELD,
    type: 'textarea',
    label: 'Body'
  },
  title: {
    name: POST_FORM_TITLE_FIELD,
    label: 'Title'
  }
});
