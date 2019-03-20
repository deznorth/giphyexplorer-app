import { FETCH_TRENDING, FETCH_SEARCH } from '../actions/types';

const initialState = {
    items: []
};

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TRENDING:
            return {
                ...state,
                items: action.payload
            };
        case FETCH_SEARCH:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}