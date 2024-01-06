import PropTypes from "prop-types";

export function ProtectedRoute({ children }) {
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.shape().isRequired,
};
