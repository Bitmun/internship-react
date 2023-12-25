import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import store from "../store/store";

function ProtectedRoute({ children }) {
  // const isAuthorized = useSelector((state) => state.auth.isAuthorized);
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
