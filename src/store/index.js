import { configureStore } from "@reduxjs/toolkit";
import clothReducer from "./reducers/clothReducer";
import favoritesReducers from "./reducers/favoritesReducers";
import cartReducers from "./reducers/cartReducers";

const store = configureStore({
  reducer: {
    clothWomen: clothReducer,
    favorites: favoritesReducers,
    cart: cartReducers,
  },
});

export default store;
