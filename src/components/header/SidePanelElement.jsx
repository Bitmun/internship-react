import React, { useState } from "react";
import PropTypes from "prop-types";

function SidePanelElement({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = () => {};

  return (
    <>
      <div
        role="button"
        tabIndex="0"
        className={`sidepanel-top ${isOpen ? "active" : "unactive"}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <a href="###" className={isOpen ? "active" : "unactive"}>
          {item.text}
        </a>
      </div>
      <ul className={`is-closed ${isOpen ? "is-opened" : ""}`}>
        {item.submenu.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </>
  );
}

SidePanelElement.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    submenu: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default SidePanelElement;
