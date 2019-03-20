import { combineReducers } from 'redux';
import gifsReducer from './gifsReducer';
import headerReducer from './headerReducer';

export default combineReducers({
    header: headerReducer,
    gifs: gifsReducer
});