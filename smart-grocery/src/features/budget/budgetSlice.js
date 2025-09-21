import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monthlyBudget: 200, // default
  categoryBudgets: {}, // { Dairy: 50, Fruits: 30 }
  alerts: [], // generated alerts
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setMonthlyBudget: (state, action) => {
      state.monthlyBudget = action.payload;
    },
    setCategoryBudget: (state, action) => {
      const { category, amount } = action.payload;
      state.categoryBudgets[category] = amount;
    },
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    clearAlerts: (state) => {
      state.alerts = [];
    }
  }
});

export const { setMonthlyBudget, setCategoryBudget, addAlert, clearAlerts } = budgetSlice.actions;
export default budgetSlice.reducer;
