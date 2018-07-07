import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Form, FormGroup } from 'reactstrap';
import { InputField } from 'components';

const PostForm = ({ handleSubmit, viewModel }) =>
  <Form onSubmit={ handleSubmit }>
    <FormGroup>
      <Field { ...viewModel.title } component={ InputField }/>
    </FormGroup>
    <FormGroup>
      <Field { ...viewModel.body } component={ InputField }/>
    </FormGroup>
  </Form>;

export default PostForm;

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  viewModel: PropTypes.shape({})
};
