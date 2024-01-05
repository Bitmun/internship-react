// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export function ProtectedRoute({ children }) {
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.shape().isRequired,
};
