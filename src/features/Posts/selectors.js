// @flow

export const getPosts = ({
  posts: {
    posts = []
  }
}: Object): Array<Post> => posts;

export const isPostsFetching = ({
  posts: {
    isFetching
  }
}: Object): boolean => isFetching;
