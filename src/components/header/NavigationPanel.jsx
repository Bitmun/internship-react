import React from "react";
import "../styles.css";
import { HEADER_ITEMS } from "../../data/data";

function NavigationPanel() {
  return (
    <nav className="navigation">
      <ul className="navigation-ul" id="navigation-ul">
        {HEADER_ITEMS.map((item) => (
          <li className="dropdown" key={item.text}>
            <a className="dropdown-link" href="###" key={`aLink${item.text}`}>
              {item.text}
            </a>
            <ul className="dropdown-menu" key={`aUl${item.text}`}>
              {item.submenu.map((el) => (
                <li key={`submenu${el}`}>
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
