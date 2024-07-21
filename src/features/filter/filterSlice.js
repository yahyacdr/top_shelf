import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductWithFilter } from "../../services/apiProducts";

const initialState = {
  items: [],
  isLoading: true,
  err: false,
};

const filterSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsWithFilter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsWithFilter.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductsWithFilter.rejected, (state) => {
        state.err = true;
      });
  },
});

export const fetchProductsWithFilter = createAsyncThunk(
  "fetchProductsWithFilter",
  async (filter) => {
    return getProductWithFilter(filter);
  }
);

export default filterSlice.reducer;
