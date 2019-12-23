import { UPDATE_POSTS } from '../actions/types';

const post = (state = [], action) => {
    switch (action.type) {
      case UPDATE_POSTS:
        return action.posts;
      default:
        return state
    }
  }
  
  export default post