import { combineReducers } from "redux";
import createReducer from "../reducers/create-reducer";
import likeReducer from "../reducers/like-reducers";

const rootReducer = combineReducers({
    createReducer,
    likeReducer,
})

export default rootReducer