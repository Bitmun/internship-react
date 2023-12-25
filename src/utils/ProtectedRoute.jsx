import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.shape().isRequired,
};
