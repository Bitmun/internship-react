import React, { useState } from "react";
import PropTypes from "prop-types";
import "./sidePanelItem.css";

export function SidePanelItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className={`sidepanel-top ${isOpen ? "active" : "unactive"}`}
        onClick={handleClick}
      >
        {item.text}
      </button>
      <ul className={`is-closed ${isOpen ? "is-opened" : ""}`}>
        {item.submenu.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </>
  );
}

SidePanelItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    submenu: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
