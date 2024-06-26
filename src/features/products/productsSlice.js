import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  err: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.items = action.payload;
    },
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
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.err = true;
      });
  },
});

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  console.log(data);
  return data;
});

export const { increase, decrease, setWeight } = productSlice.actions;

export default productSlice.reducer;
