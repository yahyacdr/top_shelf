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
        discount,
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
            discount,
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
          state.totalPrice += action.payload.totalPrice;

          return;
        }
        if (!sameProduct) {
          state.items.push(action.payload);
          state.totalPrice += action.payload.totalPrice;
          return;
        }
      },
    },
    REMOVE(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.items.map((item) => {
        if (item.id === action.payload) state.totalPrice -= item.totalPrice;
      });
    },
    INCREASE(state, action) {
      state.totalPrice = 0;
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
          item.price = Math.round(
            item.basePrice * item.weight.weight * item.quantity
          );
          item.totalPrice = Math.round(item.price + item.additions.price);
        }
        state.totalPrice += item.totalPrice;
      });
    },
    DECREASE(state, action) {
      state.totalPrice = 0;
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity > 1 ? item.quantity-- : item;
          item.price = Math.round(
            item.basePrice * item.weight.weight * item.quantity
          );
          item.totalPrice = Math.round(item.price + item.additions.price);
        }
        state.totalPrice += item.totalPrice;
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
      state.totalPrice = 0;
      state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          item.additions.integras.map((integra) => {
            if (integra.id === action.payload.integraId) integra.quantity++;
          });
          item.additions.price = item.additions.integras.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          );
          item.totalPrice = Math.round(item.price + item.additions.price);
        }
        state.totalPrice += item.totalPrice;
      });
    },
    DEC_INTEGRA(state, action) {
      state.totalPrice = 0;
      state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          item.additions.integras.map((integra) => {
            if (integra.id === action.payload.integraId)
              integra.quantity > 0 ? integra.quantity-- : integra.quantity;
          });
          item.additions.price = item.additions.integras.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          );
          item.totalPrice = Math.round(item.price + item.additions.price);
        }
        state.totalPrice += item.totalPrice;
      });
    },
    CLEAR_CART(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
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
  CLEAR_CART,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartTotalPrice = (store) =>
  store.cart.items.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getTotalItems = (store) => store.cart.items.length;

export const getCart = (store) => store.cart;
