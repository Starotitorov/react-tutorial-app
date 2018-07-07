import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input as ReactstrapInput, FormFeedback } from 'reactstrap';

const Input = ({ label, type, id, touched, error, ...props }) => [
  label && <Label key="label" for={ id }>{ label }</Label>,
  <ReactstrapInput
    {...props}
    key="input"
    type={ type }
    id={ id }
    invalid={ touched && error }/>,
  touched && error && <FormFeedback key="error">{ error }</FormFeedback>
];

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string
};
