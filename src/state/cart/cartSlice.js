import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart += action.payload;
    },
    clearCart: (state) => {
      state.cart = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, clearCart } = cartSlice.actions;
