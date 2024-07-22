import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
  },
});

export default store;
