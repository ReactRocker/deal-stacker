import { configureStore, combineReducers } from "@reduxjs/toolkit";
import strategySlice from "../redux/strategy/strategySlice";

const rootReducer = combineReducers({
  // snackbars: snackbarSlice,
  strategy: strategySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
