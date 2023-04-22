import * as actionTypes from './actionTypes';

export function getCommentsSuccess(comments){
    return {
        type:actionTypes.GET_COMMENTS_SUCCESS,
        payload:comments
    }
}

export function getComments(postId){
    return function(dispatch){
        let url = "/api/comments/";

        if(postId != null){
            url ="/api/comments/post/" + postId;
        }

        fetch(url)
        .then(res => res.json())
        .then(result => dispatch(getCommentsSuccess(result)))
    }
}