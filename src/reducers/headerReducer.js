import { SET_MESSAGE, UPDATE_QUERY } from '../actions/types';

const initialState = {
    query: '',
    message: 'All Gifs!'
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}