import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import bookSlice from "./bookSlice";

const store = configureStore({
    reducer: bookSlice.reducer,
});

export default store;