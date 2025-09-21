import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, price, qty, category}
  total: 0,
};

const calcTotal = (items) => items.reduce((s, it) => s + it.price * it.qty, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload; // {id, name, price, category}
      const existing = state.items.find(i => i.id === p.id);
      if (existing) existing.qty += 1;
      else state.items.push({ ...p, qty: 1 });
      state.total = calcTotal(state.items);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
      state.total = calcTotal(state.items);
    },
    changeQty: (state, action) => {
      const { id, qty } = action.payload;
      const it = state.items.find(i => i.id === id);
      if (it) it.qty = Math.max(0, qty);
      state.items = state.items.filter(i => i.qty > 0);
      state.total = calcTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addToCart, removeFromCart, changeQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
