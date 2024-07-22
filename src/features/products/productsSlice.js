import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../services/apiProducts";

const initialState = {
  items: [],
  isLoading: true,
  err: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.err = true;
      });
  },
});

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  return getProducts();
});

export default productSlice.reducer;
