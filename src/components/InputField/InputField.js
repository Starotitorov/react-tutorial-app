import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const InputField = ({ input, meta: { touched, error }, label, type, id }) =>
  <Input
    {...input}
    touched={touched}
    error={error}
    label={label}
    type={type}
    id={id} />;

export default InputField;

InputField.propTypes = {
  input: PropTypes.shape({}),
  meta: PropTypes.shape({}),
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string
};
