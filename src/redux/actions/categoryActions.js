import * as actionTypes from './actionTypes';

export function getCategoriesSuccess(categories){
    return{
        type:actionTypes.GET_CATEGORIES_SUCCESS,
        payload:categories
    }
}

export function getCategories(){
    return function(dispatch){
        
        fetch("/api/categories/")
        .then(res => res.json())
        .then(result => dispatch(getCategoriesSuccess(result)))
    }
    
}