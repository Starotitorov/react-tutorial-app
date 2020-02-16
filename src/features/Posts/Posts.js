import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import PostList from './PostsList';
import AddPostModal from './AddPostModal';

const Posts = ({ posts, isFetching, showAddPostModal }) =>
  <Wrapper>
    <TitleWrapper>
      <Title>Posts</Title>
      <Button color="primary" outline onClick={showAddPostModal}>
        Write a post
      </Button>
    </TitleWrapper>
    <PostList posts={posts} isLoading={isFetching}/>
    <AddPostModal />
  </Wrapper>;

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  isFetching: PropTypes.bool,
  showAddPostModal: PropTypes.func
};

export default Posts;

const Wrapper = styled.section`
  margin: 3rem 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 0;
  line-height: 1;
`;
