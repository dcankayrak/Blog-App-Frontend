import * as actionTypes from './actionTypes';


export function createCommentSuccess(comment) {
    return {
        type: actionTypes.CREATE_COMMENTS_SUCCESS,
        payload: comment
    }
}

export function createComment (comment){
    return dispatch => {
        fetch('/api/comments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createCommentSuccess(data));
        })
        console.log(JSON.stringify(comment))
    };
};

export function getCommentsSuccess(comments) {
    return {
        type: actionTypes.GET_COMMENTS_SUCCESS,
        payload: comments
    }
}

export function getComments(postId) {
    return function (dispatch) {
        let url = "/api/comments/";

        if (postId != null) {
            url = "/api/comments/post/" + postId;
        }

        fetch(url)
            .then(res => res.json())
            .then(result => dispatch(getCommentsSuccess(result)))
    }
}