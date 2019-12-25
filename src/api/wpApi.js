import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_MULTISOFT_API;

axios.defaults.baseURL = 'http://baby-elephant.atwebpages.com/wp-json';

export function getPosts() {
    return axios.get('/wp/v2/posts');
  }

  export function getFeaturedImage(id) {
    return axios.get(`/wp/v2/media/${id}`);
  }
