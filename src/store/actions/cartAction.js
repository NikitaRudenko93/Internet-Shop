import { createAction } from "@reduxjs/toolkit";

const cartAdd = createAction("CART_ADD");
const cartItemPatch = createAction("CART_ITEM_PATCH");
const cartRemove = createAction("CART_REMOVE");
const cartRemoveAll = createAction("CART_REMOVE_ALL");

export { cartAdd, cartItemPatch, cartRemove, cartRemoveAll };
