import React from "react";
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
        <SidePanelElement item={item} />
      ))}
    </ul>
  );
}

SidePanel.propTypes = {
  isToggled: Boolean.isRequired,
  toggleClass: Function.isRequired,
};

export default SidePanel;
