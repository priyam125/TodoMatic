// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoReducers";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
