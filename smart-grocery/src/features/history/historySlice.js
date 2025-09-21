import { createSlice } from "@reduxjs/toolkit";

/*
history entries: {
 id: timestamp,
 date: '2025-09-15', // iso
 items: [ {id,name,price,qty,category} ],
 total: 12.5
}
*/

const initialState = {
  records: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.records.push(action.payload);
    },
    clearHistory: (state) => {
      state.records = [];
    }
  }
});

export const { addRecord, clearHistory } = historySlice.actions;
export default historySlice.reducer;
