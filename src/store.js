import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productsSlice from "./features/products/productsSlice";
import reviewsSlice from "./features/Reviews/reviewsSlice";
import filterSlice from "./features/filter/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    reviews: reviewsSlice,
    filter: filterSlice,
  },
});

export default store;
