import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import store from "../store/store";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const state = store.getState();
  useEffect(() => {
    if (!state.isAuthorized) {
      navigate("/login");
    }
  }, []);

  return children;
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.shape().isRequired,
};
