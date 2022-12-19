import { createReducer } from "@reduxjs/toolkit";

const clothReducer = createReducer({ cloth: [] }, (builder) => {
  builder
    .addCase("CLOTH_LOADING", (store) => {
      return { ...store, loading: true };
    })
    .addCase("CLOTH_LOADING_SUCCESS", (store, action) => {
      return { ...store, ...{ loading: false, cloth: action.payload } };
    })
    .addCase("CLOTH_LOADING_FAILED", (store, action) => {
      return { ...store, ...{ loading: false, error: action.payload } };
    });
});

export default clothReducer;
