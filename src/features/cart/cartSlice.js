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
      prepare(
        id,
        name,
        img,
        quantity,
        price,
        basePrice,
        weight,
        additions,
        totalPrice
      ) {
        return {
          payload: {
            id,
            name,
            img,
            quantity,
            price,
            basePrice,
            weight,
            additions,
            totalPrice,
          },
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
    ADD_INTEGRA(state, action) {
      state.items.map((item) => {
        item.additions.integras.map((integra) => {
          if (integra.id === action.payload) integra.quantity++;
        });
      });
    },
    DEC_INTEGRA(state, action) {
      state.items.map((item) => {
        item.additions.integras.map((integra) => {
          if (integra.id === action.payload)
            integra.quantity > 1 ? integra.quantity-- : integra.quantity;
        });
      });
    },
  },
});

export const {
  ADD,
  REMOVE,
  INCREASE,
  DECREASE,
  SET_WEIGHT,
  ADD_INTEGRA,
  DEC_INTEGRA,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartTotalPrice = (store) =>
  store.cart.items.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getTotalItems = (store) => store.cart.items.length;

export const getCart = (store) => store.cart.items;
