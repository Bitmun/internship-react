import React from "react";
import SidePanel from "./SidePanel";
import NavigationPanel from "./NavigationPanel";
import BurgerIcon from "./BurgerIcon";
import "../styles.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header">
          <SidePanel />
          <img alt="logo" />
          <NavigationPanel />
          <BurgerIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
