import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  items: [], // Array of cart items
  totalQuantity: 0, // Total number of items in cart
  totalAmount: 0, // Total price of all items
};

const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const newItem = action.payload; // { id, title, price, image }
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        // If new item, add to cart
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      // Update cart totals
      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },

    // Remove item from cart completely
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update totals before removing
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;

        // Remove item from array
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Decrease quantity of an item
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // If quantity is 1, remove item completely
          state.totalQuantity--;
          state.totalAmount -= existingItem.price;
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          // Decrease quantity
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity--;
          state.totalAmount -= existingItem.price;
        }
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

// Export actions to use in components
export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;

// Export reducer to add to store
export default cartSlice.reducer;
