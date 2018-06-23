import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { List, LoadingIndicator } from 'components';
import Post from './Post';
import './PostsList.css';

const PostsList = ({ posts, isLoading }) =>
  <List
    loadingIndicator={<LoadingIndicator size={50} className="posts-list__loading-indicator"/>}
    emptyListComponent={<Alert color="info">No posts</Alert>}
    items={posts}
    isLoading={isLoading}>
    {({ items }) => {
      return (
        <div className="posts-list">
          {
            items.map(({ title, body, id }) =>
              <Post key={id} className="posts-list__post" title={title} body={body}/>
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
