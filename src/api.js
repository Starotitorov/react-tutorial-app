import { API_URL } from './config';

export const fetchPosts = () =>
  window.fetch(`${API_URL}/posts`)
    .then(response => response.json());
