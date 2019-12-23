import * as api from '../api';
import { UPDATE_POSTS } from './types';

export function getPosts() {
    return async (dispatch, getState) => {
        try {
            const response = await api.getPosts();
            dispatch({
                type: UPDATE_POSTS,
                posts: response.data,
              });
        } catch (error) {
            console.log(error, 'error');
        }
    }
}