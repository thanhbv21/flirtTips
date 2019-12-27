import { UPDATE_MEDIA } from '../actions/types';

const INITIAL_STATE = {
    mediaList: [],
    mediaListModified: 0
  };

const post = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UPDATE_MEDIA:
        const { media } = action;
        const { mediaList } = state;
        mediaList[media.id] = media;
        const currTmp = Date.parse(new Date()); 
        return {
            ...state,
            mediaList: mediaList,
            mediaListModified: currTmp
        };
      default:
        return state
    }
  }
  
  export default post