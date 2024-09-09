import { createSlice } from "@reduxjs/toolkit";

const dishSlice = createSlice({
  name: "Dish",
  initialState: {
    isLoading: false,
    dishes: [],
  },
  reducers: {
    getDishStart: (state) => {
      state.isLoading = true;
    },
    getDishSuccess: (state, action) => {
      state.isLoading = false;
      state.dishes = action.payload;
    },
    getDishFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getDishFailure, getDishStart, getDishSuccess } =
  dishSlice.actions;

export default dishSlice.reducer;
