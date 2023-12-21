import React from "react";
import "../styles.css";
import { HEADER_ITEMS } from "../../data/data";

function NavigationPanel() {
  return (
    <nav className="navigation">
      <ul className="navigation-ul" id="navigation-ul">
        {HEADER_ITEMS.map((item) => (
          <li className="dropdown">
            <a className="dropdown-link" href="###">
              {item.text}
            </a>
            <ul className="dropdown-menu">
              {item.submenu.map((el) => (
                <li>
                  <p>{el}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationPanel;
