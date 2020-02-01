import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PostForm from '../PostForm';

const AddPostModal = ({
  show,
  handleHide,
  submitPostForm,
  addPost,
  isPostButtonDisabled,
  isPostFormSubmitting,
  formViewModel
}) =>
  <Modal isOpen={show} toggle={handleHide}>
    <ModalHeader toggle={handleHide}>New post</ModalHeader>
    <ModalBody>
      <PostForm onSubmit={addPost} viewModel={formViewModel} />
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={handleHide}>Cancel</Button>
      <Button color="primary" disabled={isPostButtonDisabled} onClick={submitPostForm}>
        { isPostFormSubmitting &&
          <Spinner className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
        }
        Post
      </Button>
    </ModalFooter>
  </Modal>;

export default AddPostModal;

AddPostModal.propTypes = {
  show: PropTypes.bool,
  handleHide: PropTypes.func,
  submitPostForm: PropTypes.func,
  addPost: PropTypes.func,
  isPostButtonDisabled: PropTypes.bool,
  formViewModel: PropTypes.shape({})
};

const Spinner = styled.span`
  margin-right: 0.25rem;
`;
