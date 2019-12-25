import { combineReducers } from 'redux';
import post from './post';
import media from './media';

export default combineReducers({
    post,
    media
});