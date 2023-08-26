import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  token: "",
  msg: "",
};

// signup thnuk
export const signUpUser = createAsyncThunk("signUpUser", async () => {
  const response = await fetch("as", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return await response.json();
});

export const loginUser = createAsyncThunk("loginUser", async () => {
  const addUser = await fetch("afdasdfsd");
  return addUser;
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers:
    // for sign up
    (builder) => {
      builder.addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user = action.payload;
      });
      builder.addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = true;
      });

      // for login user

      builder.addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user = action.payload;
      });
      builder.addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = true;
      });
    },
});

export default AuthSlice.reducer;
