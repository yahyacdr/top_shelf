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
  reducers: {
    increase(state, action) {
      state.items.map((item) =>
        item.id === action.payload ? item.quantity++ : item
      );
    },
    decrease(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload)
          item.quantity > 0 ? item.quantity-- : item;
      });
    },
    setWeight(state, action) {
      state.items.map((item) =>
        item.id === action.payload.id
          ? (item.weight = action.payload.weight)
          : item
      );
    },
  },
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

export const { increase, decrease, setWeight } = productSlice.actions;

export default productSlice.reducer;
