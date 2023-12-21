import React from "react";
import PropTypes from "prop-types";
import "../styles.css";

function BurgerIcon({ toggleClass }) {
  const handleKeyDown = () => {};

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={handleKeyDown}
      className="burger-icon"
      id="burger-icon"
      onClick={toggleClass}
      aria-label="IconContainer"
    >
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
}

BurgerIcon.propTypes = {
  toggleClass: PropTypes.func.isRequired,
};

export default BurgerIcon;
