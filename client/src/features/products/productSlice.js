import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// make a iniitial state

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  selectedProduct: null,
};

// get api call
// const API_KEY = process.env.REACT_API_KEY;
const API_KEY = "http://localhost:3004/products ";
const NEW_KEY = "http://localhost:3004/";

export const fetchProductsAll = createAsyncThunk(
  "fetchProductsAll",
  async () => {
    const response = await fetch(API_KEY);

    return response.json();
  }
);
export const fetchProductById = createAsyncThunk(
  "fetchProductById",
  async (id) => {
    const response = await fetch(`http://localhost:3004/products/ ${id}`);
    return response.data;
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
    builder.addCase(fetchProductById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

// export the state
export const selectAllProducts = (state) => state.data;
export default productSlice.reducer;
