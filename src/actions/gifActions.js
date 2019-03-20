import { FETCH_TRENDING, FETCH_SEARCH } from '../actions/types';

export const fetchTrending = () => dispatch => {
    fetch(`/api/getTrending?pageNumber=0`)
    .then(res => res.json())
    .then(gifs => dispatch({
        type: FETCH_TRENDING,
        payload: gifs.data
    }));
}

export const fetchSearch = (query) => dispatch => {
    fetch(`/api/getSearch?search=${query}`)
    .then(res => res.json())
    .then(gifs => dispatch({
        type: FETCH_SEARCH,
        payload: gifs.data
    }));
}