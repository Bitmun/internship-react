import React from "react";

function SidePanelElement({ item }) {
  const { text, submenu } = item;
  const handleClick = () => {};
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li className="sidepanel-top" key={text} onClick={handleClick}>
      <a href="###">{item.text}</a>
      <ul className="is-closed">
        {submenu.map((el) => (
          <li>{el.submenu}</li>
        ))}
      </ul>
    </li>
  );
}

SidePanelElement.propTypes = {
  item: Object.isRequired,
};

export default SidePanelElement;
