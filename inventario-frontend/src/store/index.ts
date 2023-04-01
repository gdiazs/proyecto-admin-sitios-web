import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './products/productsSlice';

var reducer = combineReducers({
  productReducer
});

export const store = configureStore({
  reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch