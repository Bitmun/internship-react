import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => ({
      ...state,
      isAuthorized: true,
    }),
  },
});

export const { logIn } = authSlice.actions;

export default authSlice.reducer;
