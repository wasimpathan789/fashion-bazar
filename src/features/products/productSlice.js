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
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
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

export default productSlice.reducer;
