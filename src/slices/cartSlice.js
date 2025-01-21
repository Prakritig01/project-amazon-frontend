import { createSlice } from "@reduxjs/toolkit";
import allProducts from "./../assets/allProducts";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: allProducts
      .slice(0, 4)
      .map((ele) => ({ ...ele, quantity: 1, selected: true })),
  },
  reducers: {
    updateQuantity: (state, action) => {
      const { id, increment } = action.payload;
      const product = state.items.find((item) => item.id === id);

      if (!product) return;

      product.quantity += increment;
      if (product.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    toggleSelect: (state, action) => {
      const { id } = action.payload;
      const product = state.items.find((item) => item.id === id);

      if (!product) return;

      product.selected = !product.selected;
    },
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) return;

      const newProduct = { ...product, quantity: 1, selected: true };
      state.items.push(newProduct);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const selectItemFromCart = (state) => state.cart.items;
export const selectTotalForCart = (state) =>
  state.cart.items.reduce((total, item) => {
    if (item.selected) {
      return total + item.new_cost * item.quantity;
    }
    return total;
  }, 0);
  export const selectTotalQuantity = (state) =>
    state.cart.items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  

export const { updateQuantity, toggleSelect, addToCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
