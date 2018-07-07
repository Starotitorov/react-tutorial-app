import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PostForm from '../PostForm';

const AddPostModal = ({ show, handleHide, submitPostForm, addPost, isPostButtonDisabled }) =>
  <Modal isOpen={show} toggle={handleHide}>
    <ModalHeader toggle={handleHide}>New post</ModalHeader>
    <ModalBody>
      <PostForm onSubmit={addPost} />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" disabled={isPostButtonDisabled} onClick={submitPostForm}>Post</Button>
      <Button color="secondary" onClick={handleHide}>Cancel</Button>
    </ModalFooter>
  </Modal>;

export default AddPostModal;

AddPostModal.propTypes = {
  show: PropTypes.bool,
  handleHide: PropTypes.func,
  submitPostForm: PropTypes.func,
  addPost: PropTypes.func,
  isPostButtonDisabled: PropTypes.bool
};
