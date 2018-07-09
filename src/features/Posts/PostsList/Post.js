import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardTitle, CardText } from 'reactstrap';

const Post = ({ id, title, body, className, onDelete}) => 
    <CustomCard body className={className}>
      <Cross className="fa fa-times" onClick={ onDelete }/>
      <CardTitle>{ title }</CardTitle>
      <CardText>{ body }</CardText>
    </CustomCard>;

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
  deletePost: PropTypes.func,
  id: PropTypes.number
};

export default Post;

const Cross =styled.i`
  display: block;
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CustomCard = styled(Card)`
  position: relative;
`;
