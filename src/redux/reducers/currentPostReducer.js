import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state=initialState.currentPost,action){
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_POST:
            return action.payload;
        default:
            return state;
    }
}