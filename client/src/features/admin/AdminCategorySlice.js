import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  categoryData: [],
  // selectedProduct: null,
};


// category 
export const adduFetch = createAsyncThunk("adduFetch", async () => {
  // const response = await fetch(`${BASE_URL}products/`);
  const response = await fetch("http://localhost:3030/api/categories");

  return response.json();
});
export const 
const AdminCategorySlice = createSlice({
  name: "addu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adduFetch.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(adduFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryData = action.payload;
      })
      .addCase(adduFetch.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export default AdminCategorySlice.reducer;
