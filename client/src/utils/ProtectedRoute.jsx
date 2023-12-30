import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import store from "../store/store";

function ProtectedRoute({ children }) {
  const state = store.getState();
  if (!state.isAuthorized) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.shape().isRequired,
};
