import { combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";

const rootReducer = combineReducers({
  books: bookSlice,
  //другие срезы состояний
  //...
});

export default rootReducer;
