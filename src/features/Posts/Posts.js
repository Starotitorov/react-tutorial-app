import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostList from './PostsList';

const Posts = ({ posts, isFetching }) =>
  <Wrapper>
    <Title>Posts</Title>
    <PostList posts={posts} isLoading={isFetching}/>
  </Wrapper>;

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  isFetching: PropTypes.bool
};

export default Posts;

const Wrapper = styled.section`
  margin: 32px 0;
`;

const Title = styled.h1`
  margin-bottom: 24px;
`;
