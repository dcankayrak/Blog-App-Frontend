import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as postActions from '../../redux/actions/postActions';
import * as commentActions from '../../redux/actions/commentActions';



function BlogPost(props) {
    const params = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    
    const [post, setPost] = useState([]);

    const filt = (post) => {
        if (post.id == params.id) {
            return () => setPost(post);
        }
    }

    function getComments(id){
        props.actions.getComments(id)
    }

    useEffect(() => {
        getComments(post.id)
    });

    const handleSubmit = event => {
        event.preventDefault();
        const newComment = {firstName, lastName, email,"postId":Number(props.currentPost.id), comment};
        props.actions.createComment(newComment);
        alert('Yorum Yapıldı!')
    };

    return (
        <div>
            {
                props.posts.filter(filt).map(post => (
                    <div>
                        <div class='blog-post-container'>
                            <img class='blog-post-image' src={post.image} alt={post.title} />
                            <h3 class='blog-post-title'>{post.title}</h3>
                            <p class='blog-post-content'>{post.text}</p>
                            <Link class='button-01' to='/'>Go Back!</Link>
                            <br></br>
                            <br></br>
                            <hr></hr>
                            <h5 class='blog-post-underline'>Yorumlar - {post.comments.length}</h5>
                            <hr></hr>
                            {
                                post.comments.map((comment) => (
                                    <div class='blog-post-comment'>
                                        <div>
                                            <span class="icon-user-circle user-icon"></span>
                                            <p class='blog-post-underline'>{comment.firstName} {comment.lastName}</p>
                                        </div>
                                        <br></br>
                                        <p>{comment.comment}</p>
                                        <hr></hr>
                                    </div>
                                ))
                            }
                            <hr></hr>
                            <h5 class='blog-post-underline'>Yorum Yap!</h5>
                            <div class='make-comment'>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={event => setFirstName(event.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={event => setLastName(event.target.value)}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                    <br></br>
                                    <textarea
                                        placeholder="Comment Text"
                                        value={comment}
                                        onChange={event => setComment(event.target.value)}
                                    />
                                    <button class='button-01' type="submit">Add Comment</button>
                                </form>
                            </div>
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
        "comments": state.commentReducer,
        "currentPost":state.currentPostReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "actions": {
            "getPosts": bindActionCreators(postActions.getPosts, dispatch),
            "getComments": bindActionCreators(commentActions.getComments, dispatch),
            "createComment": bindActionCreators(commentActions.createComment, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
