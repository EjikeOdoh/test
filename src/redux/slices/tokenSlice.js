import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  token:
    "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = tokenSlice.actions;

export const selectLoggenin = (state) => state.token.loggedIn;
export default tokenSlice.reducer;
