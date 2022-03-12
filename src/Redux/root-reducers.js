import { combineReducers } from "redux";
import usersReducer from "./reducer";

const rootReducers = combineReducers({
    data: usersReducer
})
export default rootReducers;