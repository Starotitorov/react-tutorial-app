import axios from 'axios';
import { API_URL } from '../config';

const restService = {};

export const fetchPosts = () =>
  axios.get(`${API_URL}/posts`)
    .then(response => response.data);

restService.api = {
  fetchPosts
};

export default restService;
