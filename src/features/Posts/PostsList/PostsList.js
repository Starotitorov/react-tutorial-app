import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import styled from 'styled-components';
import { List, LoadingIndicator } from 'components';
import Post from './PostView';

const PostsList = ({ posts, isLoading, deletePost }) =>
  <List
    loadingIndicator={<CustomLoadingIndicator size={50} />}
    emptyListComponent={<Alert color="info">No posts</Alert>}
    items={posts}
    deletePost={deletePost}
    isLoading={isLoading}>
    {({ items, deletePost }) => {
      return (
        <div>
          {
            items.map(({ title, body, id }) =>
              <CustomPost onDelete={deletePost} key={id} id={id} title={title} body={body}/>
            )
          }
        </div>
      );
    }}
  </List>;

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool
};

export default PostsList;

const CustomLoadingIndicator = styled(LoadingIndicator)`
  width: 100%;
  margin: 24px 0;
  text-align: center;
`;

const CustomPost = styled(Post)`
  margin-bottom: 24px;
`;
