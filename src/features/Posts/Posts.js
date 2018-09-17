import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'reactstrap';
import PostList from './PostsList';
import AddPostModal from './AddPostModal';

const Posts = ({ posts, isFetching, showAddPostModal }) =>
  <Container>
    <Row>
      <Col sm={{ size: 6, offset: 3 }}>
        <Wrapper>
          <TitleWrapper>
            <h1>Posts</h1>
            <Button color="link" onClick={showAddPostModal} size="lg">Write post</Button>
          </TitleWrapper>
          <PostList posts={posts} isLoading={isFetching}/>
          <AddPostModal />
        </Wrapper>
      </Col>
    </Row>
  </Container>;

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
