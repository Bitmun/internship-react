import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./routes/main/MainPage";
import { Login } from "./routes/login/Login";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { SignUp } from "./routes/signUp/SignUp";

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
