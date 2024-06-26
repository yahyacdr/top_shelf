import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productsSlice from "./features/products/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});

export default store;
