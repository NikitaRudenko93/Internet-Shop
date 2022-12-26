import { createReducer } from "@reduxjs/toolkit";

const countReducer = createReducer({ count: 0 }, (builder) => {
  builder
    .addCase("COUNTER_INCREMENT", (store, payload) => {
      const newCount = store.count + 1;
      return { ...store, count: newCount };
    })
    .addCase("COUNTER_DICREMENT", (store) => {
      const newCount = store.count - 1;
      if (newCount >= 0) {
        return { ...store, count: newCount };
      }
    })
    .addCase("COUNTER_CLEAR", (store) => {
      return { ...store, count: 0 };
    });
});

export default countReducer;
