import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice";
import userSlice from "./slices/userSlice";
import transactionSlice from "./slices/transactionSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
    transactions: transactionSlice,
  },
});

export default store;
