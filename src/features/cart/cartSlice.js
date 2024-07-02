import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.items = [...state.items, action.payload];
    },
    remove(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increase(state, action) {
      state.items.map((item) =>
        item.id === action.payload ? item.quantity++ : item
      );
    },
    decrease(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload)
          item.quantity > 1 ? item.quantity-- : item;
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
});

export const { add, remove, increase, decrease, setWeight } = cartSlice.actions;

export default cartSlice.reducer;
