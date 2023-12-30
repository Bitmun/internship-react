import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/styles.css";
import MainPage from "./routes/main/MainPage";
import Login from "./routes/login/Login";
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
