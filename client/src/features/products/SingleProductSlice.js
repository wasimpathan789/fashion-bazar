// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: "",
//   isLoading: false,
//   isError: false
// };

// const fetchSingleProduct = createAsyncThunk("fetchSingleProduct");

// const SingleProductSlice = createSlice({
//   name: "singleProduct",
//   initialState,
//   reducers: {
//     productDetails: (state, action){
//         state.push(action.payload)

//     }
//   },
//   extraReducers : (builder)=>{
//     builder.addCase(fetchSingleProduct.pending, (state, action)=>{
//         state.isLoading = true;
//     })
//     builder.addCase(fetchSingleProduct.fulfilled, (state, action)=>{
//         state.data = true;
//     })
//     builder.addCase(fetchSingleProduct.rejected, (state, action)=>{
//         state.isError = true;
//     })
//   }
// });

// export default SingleProductSlice.reducer;
