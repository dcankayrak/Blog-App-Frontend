import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

import * as postActions from '../../redux/actions/postActions';
import * as commentActions from '../../redux/actions/commentActions';



function BlogPost (props){
    const params = useParams();

const [post, setPost] = useState([]);

useEffect(() => {
    props.actions.getComments(post.id)
});

const filt = (post) => {
    if (post.id == params.id) {
        return () => setPost(post);
    }
}
        return (
            <div>
                {
                props.posts.filter(filt).map(post => (
                    <div>
                    <div class='blog-post-container'>
                        <img class='blog-post-image' src={post.image} alt={post.title}/>
                        <h3 class='blog-post-title'>{post.title}</h3>
                        <p class='blog-post-content'>{post.text}</p>
                    <Link class='blog-post-back-button' to='/'>Go Back!</Link>

                    <br></br>
                        <br></br>
                        <hr></hr>
                        <h5 class='blog-post-underline'>Yorumlar - {post.comments.length}</h5>
                        <hr></hr>
                        {
                            post.comments.map((comment) => (
                                <div class='blog-post-comment'>
                                    <p class='blog-post-underline'>{comment.firstName} {comment.lastName}</p>
                                    <p>{comment.comment}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                ))
            }  
            </div>
        )
    }


function mapStateToProps(state) {
    return {
        "posts": state.postReducer,
        "comments": state.commentReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "actions": {
            "getPosts": bindActionCreators(postActions.getPosts, dispatch),
            "getComments": bindActionCreators(commentActions.getComments, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
