import axios from 'axios';
import { API_URL } from '../config';

const restService = {};

export const fetchPosts = () =>
  axios.get(
    `${API_URL}/posts`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  )
    .then(response => response.data);

export const addPost = post =>
  axios.post(
    `${API_URL}/posts`,
    post,
    {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }
  )
    .then(response => response.data);

restService.api = {
  fetchPosts,
  addPost
};

export default restService;
