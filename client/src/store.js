import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/CartSlice";
// import singleProductReducer from "./features/products/SingleProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    allCart: cartReducer,
    // singleProduct: singleProductReducer,
  },
});
