import React from "react";
import PropTypes from "prop-types";
import { HEADER_ITEMS } from "../../data/data";

import SidePanelElement from "./SidePanelElement";

function SidePanel({ isToggled, toggleClass }) {
  const isOpened = isToggled ? "sidepanel-opened" : "";

  const classes = `sidepanel ${isOpened}`;

  return (
    <ul id="side-panel" className={classes}>
      <a className="closebtn" id="closebtn" href="###" onClick={toggleClass}>
        &times;
      </a>
      {HEADER_ITEMS.map((item) => (
        <SidePanelElement key={item.text} item={item} />
      ))}
    </ul>
  );
}

SidePanel.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  toggleClass: PropTypes.func.isRequired,
};

export default SidePanel;
