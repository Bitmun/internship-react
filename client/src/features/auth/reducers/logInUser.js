import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn } from "../authSlice";

const getLogInResponse = async (credentials) => {
  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || "Ok error");
  }

  // eslint-disable-next-line no-return-await
  const data = await response.json();
  return data;
};

export const logInUser = createAsyncThunk(
  "auth/logIn",
  async (credentials, { dispatch }) => {
    try {
      const data = await getLogInResponse(credentials);
      console.log(data);
      dispatch(logIn());
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
);
