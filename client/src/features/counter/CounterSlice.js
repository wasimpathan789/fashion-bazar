import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, actin) => {
      state.count += 1;
    },
    decrimentCount: (state, action) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementCount, decrimentCount } = CounterSlice.actions;
export default CounterSlice.reducer;
