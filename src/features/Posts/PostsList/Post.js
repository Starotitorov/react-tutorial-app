// @flow

import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export type Props = {
  title: string,
  body: string,
  className?: string
}

const Post = ({ title, body, className }: Props) =>
  <Card body className={className}>
    <CardTitle>{ title }</CardTitle>
    <CardText>{ body }</CardText>
  </Card>;

export default Post;
