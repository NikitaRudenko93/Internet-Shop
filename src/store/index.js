import { configureStore } from "@reduxjs/toolkit";
import clothReducer from "./reducers/clothReducer";
import favoritesReducers from "./reducers/favoritesReducers";
import countReducer from "./reducers/countReducer";

const store = configureStore({
  reducer: {
    clothWomen: clothReducer,
    favorites: favoritesReducers,
    count: countReducer,
  },
});

export default store;
