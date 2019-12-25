import * as api from '../api';
import { UPDATE_MEDIA } from './types';

export function getFeaturedImage(id) {
    return async (dispatch, getState) => {
        try {
            console.log(getState());
            const response = await api.getFeaturedImage(id);
            dispatch({
                type: UPDATE_MEDIA,
                media: response.data,
              });
        } catch (error) {
            console.log(error, 'error');
        }
    }
}