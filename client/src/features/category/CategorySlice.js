import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utlis/status";
import { BASE_URL } from "../../utlis/apiUrl";

const initialState = {
  status: STATUS.IDLE,
  data: [],
};

// fetch api call

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const response = await fetch(`${BASE_URL}categories`);
  return response.json();
});

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = STATUS.IDLE;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data = action.payload;
      // state.data.push(action.payload);
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
  },
});

export default CategorySlice.reducer;
