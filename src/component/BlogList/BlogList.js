import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as postActions from '../../redux/actions/postActions';
import * as categoryActions from '../../redux/actions/categoryActions';

class BlogList extends Component {

    componentDidMount(){
        this.props.actions.getPosts();
        this.props.actions.getCategories();
    }

    changeCategory(categoryId){
        if(categoryId == 0){
            this.props.actions.getPosts()
        }
        else{
            this.props.actions.getPosts(categoryId)
        }
    }

  render() {
    return (
      <div>
        <div class='blog-container'>
            <div class='blog-category-list'>
                <ul class='blog-category-links'>
                    <li class='blog-category-link'>
                        <a onClick={()=>this.changeCategory(0)}>All</a>
                    </li>
                    {
                        this.props.categories.map(category => (
                            <li class='blog-category-link'>
                                <a onClick={()=>this.changeCategory(category.id)}>{category.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div class='blog-items'>
                {
                    this.props.posts.map(post => (
                        <div class='blog-item'>
                            <img class='blog-item-image' src={post.image}/>
                            <p class='blog-item-date'>{post.uploadDate}</p>
                            <h5 class='blog-item-title'>{post.title}</h5>
                            <p class='blog-item-description'>{post.text}</p>
                            <Link class='blog-item-read-more' to={"/"+post.id}>Read More</Link>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        "posts":state.postReducer,
        "categories":state.categoryReducer,
    }
}

function mapDispatchToProps(dispatch){
    return {
        "actions":{
            "getPosts":bindActionCreators(postActions.getPosts,dispatch),
            "getCategories":bindActionCreators(categoryActions.getCategories,dispatch),
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList);
