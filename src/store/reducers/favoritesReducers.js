import { createReducer } from "@reduxjs/toolkit";

const favoritesReducers = createReducer([], (builder) => {
  builder
    .addCase("FAVORITES_ADD", (store, { payload }) => {
      return [...store, payload];
    })
    .addCase("FAVORITES_REMOVE", (store, { payload }) => {
      const [id = !id, ...data] = store;
      return data;
    });
});

export default favoritesReducers;
