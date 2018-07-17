import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Label, Input as ReactstrapInput, FormFeedback } from 'reactstrap';

const Input = ({ label, type, id, touched, error, ...props }) =>
  <Fragment>
    {
      label &&
        <Label for={ id }>{ label }</Label>
    }
    <ReactstrapInput
      {...props}
      type={ type }
      id={ id }
      invalid={ touched && error } />
    {
      touched && error &&
        <FormFeedback>{ error }</FormFeedback>
    }
  </Fragment>;

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string
};
