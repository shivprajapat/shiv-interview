import { createStore,applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import rootReducers from "./root-reducers";

const middleware= [reduxThunk]
export const store =createStore(rootReducers ,applyMiddleware(...middleware))