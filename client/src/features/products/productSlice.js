import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// make a iniitial state

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

// get api call
export const fetchProductsAll = createAsyncThunk(
  "fetchProductsAll",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAll.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductsAll.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

// export the state
export const selectAllProducts = (state) => state.data;
export default productSlice.reducer;
