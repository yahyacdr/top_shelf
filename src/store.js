import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productsSlice from "./features/products/productsSlice";
import reviewsSlice from "./features/Reviews/reviewsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    reviews: reviewsSlice,
  },
});

export default store;
