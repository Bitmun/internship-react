import React from "react";
import "../styles.css";
import { HEADER_ITEMS } from "../../data/data";
import NavigationMenuItem from "./NavigationMenuItem";

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
