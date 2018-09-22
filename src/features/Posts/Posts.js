// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import PostList from './PostsList';
import AddPostModal from './AddPostModal';

type Props = {
  posts: Array<Post>,
  isFetching: boolean,
  showAddPostModal: Function,
  fetchPosts: Function
};

const Posts = ({ posts, isFetching, showAddPostModal }: Props) =>
  <Wrapper>
    <TitleWrapper>
      <h1>Posts</h1>
      <Button color="link" onClick={showAddPostModal} size="lg">Write post</Button>
    </TitleWrapper>
    <PostList posts={posts} isLoading={isFetching}/>
    <AddPostModal/>
  </Wrapper>;

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
