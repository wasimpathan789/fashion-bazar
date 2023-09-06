import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/CartSlice";
import counterReducer from "./features/counter/CounterSlice";
import categoryReducer from "./features/category/CategorySlice";
import adminReducer from "./features/admin/AdminSlice";
// // import adminReducer from "./features/admin/AdminSlice";
// import adminCategoryReduce from "./features/admin/AdminCategorySlice";
// // import adminReducer from "./features/admin/AdminSlice";

// import singleProductReducer from "./features/products/SingleProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,

    allCart: cartReducer,
    counter: counterReducer,
    category: categoryReducer,

    admin: adminReducer,
    // adminCategory: adminCategoryReduce,

    // singleProduct: singleProductReducer,
  },
});
