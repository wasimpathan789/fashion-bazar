import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  isLoading: false,
  isErro: false,
  data: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default CartSlice.reducer;
