import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Block } from "../block/Block";
import "./blocksSection.css";

export function BlocksSection({ itemsList }) {
  const isEmpty = itemsList.length === 0;
  const divClass = classNames("blocks-section", {
    "is-empty": isEmpty,
  });

  if (isEmpty) {
    return (
      <div className={divClass}>
        <div>No such thing...</div>
      </div>
    );
  }

  return (
    <div className={divClass}>
      {itemsList.map((item) => (
        <Block item={item} key={item.title} />
      ))}
    </div>
  );
}

BlocksSection.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      desc: PropTypes.string,
      img: PropTypes.string,
    }),
  ).isRequired,
};
