import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from ".";

export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk));
}