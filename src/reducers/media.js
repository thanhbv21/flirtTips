import { UPDATE_MEDIA } from '../actions/types';

const INITIAL_STATE = {
    mediaList: [],
  };

const post = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UPDATE_MEDIA:
        const { media } = action;
        const { mediaList } = state;
        mediaList[media.id] = media;
        return {
            ...state,
            mediaList: mediaList
        };
      default:
        return state
    }
  }
  
  export default post