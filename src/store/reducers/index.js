

import {combineReducers} from 'redux';

import imageReducers from './imageReducers'; 

const reducers = combineReducers({
    imagesData : imageReducers
})

export default reducers;