import { combineReducers } from "redux";
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import categoryReducer from './categoryReducer';

const rootReducers = combineReducers({
    postReducer,
    commentReducer,
    categoryReducer
});

export default rootReducers;