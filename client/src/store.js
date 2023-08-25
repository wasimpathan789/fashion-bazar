import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
