import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cart = action.payload;   this for first time means it will add only one item not all
      state.cart.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cart.filter((item) => item.id !== action.payload);
    },
    removeItemAllCart: (state, action) => {},
  },
});

export const { addToCart, removeItemFromCart, removeItemAllCart } =
  CartSlice.actions;

export default CartSlice.reducer;
