import { createReducer } from "@reduxjs/toolkit";

const favoritesReducers = createReducer([], (builder) => {
  builder
    .addCase("FAVORITES_ADD", (store, { payload }) => {
      return [...store, payload];
    })
    .addCase("FAVORITES_REMOVE", (store, { payload }) => {
      return [...store.filter((item) => item.id !== payload.id)];
    });
});

export default favoritesReducers;
