import { FETCH_TRENDING, FETCH_SEARCH, FETCH_RANDOM, UPDATE_PAGE } from '../actions/types';

const initialState = {
    currentPage: 1,
    totalResults: 0,
    items: [],
    item: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TRENDING:
            return {
                ...state,
                items: action.payload.gifs,
                totalResults: action.payload.totalResults
            };
        case FETCH_SEARCH:
            return {
                ...state,
                items: action.payload.gifs,
                totalResults: action.payload.totalResults
            };
        case FETCH_RANDOM:
            return {
                ...state,
                item: action.payload
            };
        case UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            return state;
    }
}