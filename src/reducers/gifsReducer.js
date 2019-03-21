import { FETCH_TRENDING, FETCH_SEARCH, FETCH_RANDOM } from '../actions/types';

const initialState = {
    items: [],
    item: {}
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
        case FETCH_RANDOM:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}