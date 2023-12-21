import React from "react";
import "../styles.css";

function BurgerIcon({ toggleClass }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="burger-icon" id="burger-icon" onClick={toggleClass}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
}

BurgerIcon.propTypes = {
  toggleClass: Function.isRequired,
};

export default BurgerIcon;
