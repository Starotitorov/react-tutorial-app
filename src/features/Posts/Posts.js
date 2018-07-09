import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import PostList from './PostsList';
import AddPostModal from './AddPostModal';

const Posts = ({ posts, isFetching, showAddPostModal, deletePost }) =>
  <Wrapper>
    <TitleWrapper>
      <h1>Posts</h1>
      <Button color="link" onClick={showAddPostModal} size="lg">Write post</Button>
    </TitleWrapper>
    <PostList posts={posts} deletePost={deletePost} isLoading={isFetching}/>
    <AddPostModal />
  </Wrapper>;

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  isFetching: PropTypes.bool,
  showAddPostModal: PropTypes.func
};

export default Posts;

const Wrapper = styled.section`
  margin: 32px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
`;
