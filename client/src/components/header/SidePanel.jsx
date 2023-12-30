import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { HEADER_ITEMS } from "../../data/data";
import SidePanelItem from "./SidePanelItem";

function SidePanel({ isToggled, toggleClass }) {
  const ulClass = classNames("sidepanel", {
    "sidepanel-opened": isToggled,
  });
  return (
    <ul id="side-panel" className={ulClass}>
      <a className="closebtn" id="closebtn" href="###" onClick={toggleClass}>
        &times;
      </a>
      {HEADER_ITEMS.map((item) => (
        <SidePanelItem key={`${item.text}`} item={item} />
      ))}
    </ul>
  );
}

SidePanel.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  toggleClass: PropTypes.func.isRequired,
};

export default SidePanel;
