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
    ADD: {
      prepare(id, quantity, price, weight, additions, totalPrice) {
        return {
          payload: { id, quantity, price, weight, additions, totalPrice },
        };
      },
      reducer(state, action) {
        const sameProductDiffPrice = state.items.some(
          (item) =>
            item.id === action.payload.id &&
            item.totalPrice !== action.payload.totalPrice
        );
        const sameProduct = state.items.some(
          (item) => item.id === action.payload.id
        );

        if (sameProductDiffPrice) {
          state.items = state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          );
          return;
        }
        if (!sameProduct) {
          state.items.push(action.payload);
          return;
        }
      },
    },
    REMOVE(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    INCREASE(state, action) {
      state.items.map((item) =>
        item.id === action.payload ? item.quantity++ : item
      );
    },
    DECREASE(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload)
          item.quantity > 1 ? item.quantity-- : item;
      });
    },
    SET_WEIGHT(state, action) {
      state.items.map((item) =>
        item.id === action.payload.id
          ? (item.weight = action.payload.weight)
          : item
      );
    },
  },
});

export const { ADD, REMOVE, INCREASE, DECREASE, SET_WEIGHT } =
  cartSlice.actions;

export default cartSlice.reducer;
