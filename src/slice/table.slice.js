import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    isLoading: false,
    table: {},
  },
  reducers: {
    getTableStart: (state) => {
      state.isLoading = true;
    },
    getTableSuccess: (state, action) => {
      state.isLoading = false;
      state.table = action.payload;
    },
    getTableFailure: (state) => {
      state.isLoading = false;
    },
  },
});
export const { getTableFailure, getTableStart, getTableSuccess } =
  tableSlice.actions;

export default tableSlice.reducer;
