import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostsList';
import './Posts.css';

const Posts = ({ posts, isFetching }) =>
  <section className="posts">
    <h1 className="posts__title">Posts</h1>
    <div className="posts__list">
      <PostList posts={posts} isLoading={isFetching}/>
    </div>
  </section>;

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  isFetching: PropTypes.bool
};

export default Posts;
