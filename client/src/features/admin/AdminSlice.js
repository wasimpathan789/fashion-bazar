import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  categoryData: [],
  // selectedProduct: null,
};

// category
export const fetchCategoryData = createAsyncThunk(
  "fetchCategoryData",
  async () => {
    const response = await fetch("http://localhost:3030/api/categories");
    return response.json();
  }
);
const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryData = action.payload;
      })
      .addCase(fetchCategoryData.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export default AdminSlice.reducer;
