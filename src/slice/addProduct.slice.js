import { createSlice } from "@reduxjs/toolkit";

const producSlice = createSlice({
  name: "product",
  initialState: {
    selectedProduts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.selectedProduts = action.payload;
    },
  },
});
export const { addProduct } = producSlice.actions;
export default producSlice.reducer;
