import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state=initialState.newComment,action){
    switch(action.type){
        case actionTypes.CREATE_COMMENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}