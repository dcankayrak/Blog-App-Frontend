import { combineReducers } from "redux";
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import categoryReducer from './categoryReducer';
import createCommentReducer from "./createCommentReducer";
import currentPostReducer from './currentPostReducer';

const rootReducers = combineReducers({
    postReducer,
    commentReducer,
    categoryReducer,
    createCommentReducer,
    currentPostReducer
});

export default rootReducers;