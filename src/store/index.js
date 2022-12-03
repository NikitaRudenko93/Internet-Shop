import { configureStore } from "@reduxjs/toolkit";
import clothReducer from "./reducers/clothReducer";

const store = configureStore({
  reducer: {
    cloth: clothReducer,
  },
});

export default store;
