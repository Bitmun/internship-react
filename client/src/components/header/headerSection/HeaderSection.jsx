import React, { useState } from "react";
import SidePanel from "../sidePanel/SidePanel";
import NavigationPanel from "../navigationPanel/NavigationPanel";
import BurgerIcon from "../burgerIcon/BurgerIcon";
import "./headerSection.css";
import logo from "../../../images/spring-logo.png";

function HeaderSection() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="header-wrapper">
      <div className="header">
        <SidePanel isToggled={isToggled} toggleClass={toggleClass} />
        <img alt="logo" src={logo} />
        <NavigationPanel />
        <BurgerIcon toggleClass={toggleClass} />
      </div>
    </header>
  );
}

export default HeaderSection;
