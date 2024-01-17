import { combineReducers } from "redux";
import { todoReducer } from "./todos/todoReducers";

export const rootReducer = combineReducers({
  todoReducer,
  // more reducers can be added here
});
