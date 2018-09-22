// @flow

import axios from 'axios';
import { API_URL } from '../config';

type PostModel = {
  title: string,
  body: string
}

const restService = {};

export const fetchPosts = () =>
  axios.get(`${API_URL}/posts`)
    .then(response => response.data);

export const addPost = (post: PostModel) =>
  axios.post(`${API_URL}/posts`, post)
    .then(response => response.data);

restService.api = {
  fetchPosts,
  addPost
};

export default restService;
