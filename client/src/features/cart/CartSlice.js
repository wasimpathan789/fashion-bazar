import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  isLoading: false,
  isErro: false,
  item: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.item = action.payload;
      // state.push(action.payload);
    },
    removeItemFromCart: (state, action) => {},
    removeItemAllCart: (state, action) => {},
  },
});

export const { addToCart, removeItemFromCart, removeItemAllCart } =
  CartSlice.actions;

export default CartSlice.reducer;
