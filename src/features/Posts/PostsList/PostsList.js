// @flow

import React, { type ComponentType } from 'react';
import { Alert } from 'reactstrap';
import styled from 'styled-components';
import { List, LoadingIndicator } from 'components';
import PostItem, { type Props as PostItemProps } from './Post';

type Props = {
  posts: Array<Post>,
  isLoading: boolean
};

type RenderProps = {
  items: Array<Post>
};

const PostsList = ({ posts, isLoading }: Props) =>
  <List
    loadingIndicator={<CustomLoadingIndicator size={50} />}
    emptyListComponent={<Alert color="info">No posts</Alert>}
    items={posts}
    isLoading={isLoading}>
    {({ items }: RenderProps) => {
      return (
        <div>
          {
            items.map(({ title, body, id }: Post) =>
              <CustomPost key={id} title={title} body={body}/>
            )
          }
        </div>
      );
    }}
  </List>;

export default PostsList;

const CustomLoadingIndicator = styled(LoadingIndicator)`
  width: 100%;
  margin: 24px 0;
  text-align: center;
`;

const CustomPost = (styled(PostItem)`
  margin-bottom: 24px;
`: ComponentType<PostItemProps>);
