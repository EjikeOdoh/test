import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { setTransactions } = transactionSlice.actions;

export const selectTransactions = (state) => state.transactions.transactions;
export default transactionSlice.reducer;
