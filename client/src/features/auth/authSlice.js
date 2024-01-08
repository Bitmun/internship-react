import { createSlice } from "@reduxjs/toolkit";
import { logInUser } from "./reducers/logInUser";

const initialState = {
  isAuthorized: null,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    singIn: (state, action) => ({
      ...state,
      isAuthorized: true,
      username: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.fulfilled, (state) => ({
        ...state,
        isAuthorized: true,
      }))
      .addCase(logInUser.rejected, (state) => ({
        ...state,
        isAuthorized: false,
      }));
  },
});

export const authReducer = authSlice.reducer;

export const { singIn } = authSlice.actions;
