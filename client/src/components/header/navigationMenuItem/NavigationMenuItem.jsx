import React from "react";
import { shape, string, arrayOf } from "prop-types";
import "./navigationMenuItem.css";
import SubMenuItem from "../subMenuItem/SubMenuItem";

function NavigationMenuItem({ item }) {
  return (
    <li className="dropdown">
      <a className="dropdown-link" href="###">
        {item.text}
      </a>
      <ul className="dropdown-menu">
        {item.submenu.map((el) => (
          <SubMenuItem key={el} element={el} />
        ))}
      </ul>
    </li>
  );
}

NavigationMenuItem.propTypes = {
  item: shape({
    text: string,
    submenu: arrayOf(string),
  }).isRequired,
};

export default NavigationMenuItem;
