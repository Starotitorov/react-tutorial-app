// @flow

import { createValidator } from 'revalidate';

const required = createValidator(
  message => value => !value ? message : undefined,
  field => `${field} is required`
);

export default {
  required
}
