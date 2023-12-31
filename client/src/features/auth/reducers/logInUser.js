import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLogInResponse = async (credentials) => {
  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || "Response error");
  }

  const data = await response.json();
  return data;
};

export const logInUser = createAsyncThunk("auth/logIn", async (credentials) => {
  const data = await getLogInResponse(credentials);
  return data;
});
