import { UPDATE_POSTS } from '../actions/types';

const INITIAL_STATE = {
    postList: [],
  };

const post = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UPDATE_POSTS:
        const { posts } = action;
        return {
            ...state,
            postList: posts
        };
      default:
        return state
    }
  }
  
  export default post