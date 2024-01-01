import React from "react";
import PropTypes from "prop-types";
import "./burgerIcon.css";

export function BurgerIcon({ toggleClass }) {
  return (
    <button
      type="button"
      className="burger-icon"
      id="burger-icon"
      onClick={toggleClass}
      aria-label="IconContainer"
    >
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </button>
  );
}

BurgerIcon.propTypes = {
  toggleClass: PropTypes.func.isRequired,
};
