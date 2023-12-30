import React, { useState } from "react";
import PropTypes from "prop-types";

function SidePanelItem({ item }) {
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
        <a href="###" className={isOpen ? "active" : "unactive"}>
          {item.text}
        </a>
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

export default SidePanelItem;
