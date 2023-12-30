import React from "react";
import { HEADER_ITEMS } from "../../../data/data";
import NavigationMenuItem from "../navigationMenuItem/NavigationMenuItem";
import "./navigationPanel.css";

function NavigationPanel() {
  return (
    <nav className="navigation">
      <ul className="navigation-ul" id="navigation-ul">
        {HEADER_ITEMS.map((item) => (
          <NavigationMenuItem key={item.text} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationPanel;
