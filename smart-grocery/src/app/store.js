import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import budgetReducer from "../features/budget/budgetSlice";
import historyReducer from "../features/history/historySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    budget: budgetReducer,
    history: historyReducer,
  },
});
