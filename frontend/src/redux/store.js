import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./user/reducer";
import todoReducer from "./todo/reducer";
const rootreducer = combineReducers({
  userReducer,
  todoReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
