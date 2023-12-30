import React from "react";
import { string } from "prop-types";

function SubMenuItem({ element }) {
  return (
    <li>
      <p>{element}</p>
    </li>
  );
}

SubMenuItem.propTypes = {
  element: string.isRequired,
};

export default SubMenuItem;
