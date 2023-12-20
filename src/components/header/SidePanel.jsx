import React from "react";
import { HEADER_ITEMS } from "../../data/data";

function SidePanel() {
  const sidePanel = document.getElementById("side-panel");

  const openSidePanel = () => {
    sidePanel.classList.toggle("sidepanel-opened");
  };
  return (
    <ul id="side-panel" className="sidepanel">
      <a className="closebtn" id="closebtn" href="###" onClick={openSidePanel}>
        &times;
      </a>
      {HEADER_ITEMS.map((item) => (
        <li className="sidepanel-top" key={item.text}>
          <a href="###">{item.text}</a>
          <ul className="is-closed">
            {item.submenu.map((el) => (
              <li>{el.submenu}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default SidePanel;
