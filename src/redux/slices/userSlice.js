import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "user",
  currentUser: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;
export default userSlice.reducer;
