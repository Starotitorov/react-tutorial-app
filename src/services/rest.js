import axios from 'axios';
import { API_URL } from '../config';

const restService = {};

export const fetchPosts = () =>
  axios.get(`${API_URL}/posts`)
    .then(response => response.data);

export const addPost = post => axios.post(`${API_URL}/posts`, post)
  .then(response => response.data);

export const deletePost = postId => axios.delete(`${API_URL}/posts/${postId}`)
  .then(response => response.data);

restService.api = {
  fetchPosts,
  addPost,
  deletePost,
};

export default restService;
