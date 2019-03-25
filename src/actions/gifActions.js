import { FETCH_TRENDING, FETCH_SEARCH, FETCH_RANDOM, UPDATE_PAGE } from '../actions/types';

export const updatePage = page => dispatch => {
    dispatch({
        type: UPDATE_PAGE,
        payload: page
    });
}

export const fetchTrending = (currentPage = 1) => dispatch => {
    fetch(`/api/getTrending?pageNumber=${currentPage-1}`)
    .then(res => res.json())
    .then(gifs => dispatch({
        type: FETCH_TRENDING,
        payload: { 
            gifs: gifs.data,
            totalResults: gifs.pagination.total_count
        }
    }));
}

export const fetchSearch = (query, currentPage = 1) => dispatch => {
    fetch(`/api/getSearch?search=${query}?pageNumber=${currentPage-1}`)
    .then(res => res.json())
    .then(gifs => dispatch({
        type: FETCH_SEARCH,
        payload: { 
            gifs: gifs.data,
            totalResults: gifs.pagination.total_count
        }
    }));
}

export const fetchRandom = () => dispatch => {
    fetch(`/api/getRandom`)
    .then(res => res.json())
    .then(gif => dispatch({
        type: FETCH_RANDOM,
        payload: gif.data
    }));
}