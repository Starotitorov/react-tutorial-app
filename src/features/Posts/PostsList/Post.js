import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'reactstrap';

const Post = ({ title, body, className }) =>
  <Card body className={className}>
    <CardTitle>{ title }</CardTitle>
    <CardText>{ body }</CardText>
  </Card>;

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string
};

export default Post;
