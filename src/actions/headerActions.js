import { SET_MESSAGE, UPDATE_QUERY } from './types';

export const setMessage = (message) => dispatch => {
    dispatch({
        type: SET_MESSAGE,
        payload: message
    });
}

export const updateQuery = (query) => dispatch => {
    dispatch({
        type: UPDATE_QUERY,
        payload: query
    });
}