//store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer to the store
    // You can add more reducers here as your app grows
    // Example: user: userReducer, products: productsReducer, etc.
  },
});
