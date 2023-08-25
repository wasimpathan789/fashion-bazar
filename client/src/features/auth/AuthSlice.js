import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default AuthSlice.reducer;
