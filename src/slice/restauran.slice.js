import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    isLoading: false,
    restaurant: {},
  },
  reducers: {
    getRestaurantStart: (state) => {
      state.isLoading = true;
    },
    getRestaurantSuccess: (state, action) => {
      state.isLoading = false;
      state.restaurant = action.payload;
    },
    getRestaurantFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getRestaurantFailure,
  getRestaurantStart,
  getRestaurantSuccess,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
