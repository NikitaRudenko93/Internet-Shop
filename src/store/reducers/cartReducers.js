import { createReducer } from "@reduxjs/toolkit";

const cartReducers = createReducer([], (builder) => {
  builder
    .addCase("CART_ADD", (store, { payload }) => {
      return store.find(
        (item) => item.size === payload.size && item.color === payload.color
      )
        ? [
            ...store.map((item) => {
              if (item.size === payload.size && item.color === payload.color) {
                return { ...item, count: item.count + payload.count };
              } else {
                return item;
              }
            }),
          ]
        : [...store, payload];
    })
    .addCase("CART_ITEM_PATCH", (store, { payload }) => {
      return [
        ...store.map((item) => {
          if (item.cartId === payload.cartId) {
            return { ...item, count: payload.count };
          }
          return item;
        }),
      ];
    })
    .addCase("CART_REMOVE", (store, { payload }) => {
      return [...store.filter((item) => item.cartId !== payload.cartId)];
    })
    .addCase("CART_REMOVE_ALL", () => {
      return [];
    });
});

export default cartReducers;
