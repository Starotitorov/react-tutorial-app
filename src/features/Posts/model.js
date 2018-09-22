// @flow

type PostModel = {
  title: string,
  body: string
};

export const createPostModel = ({ body, title }: Object): PostModel => ({ title, body });
