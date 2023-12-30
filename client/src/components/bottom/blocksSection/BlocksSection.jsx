import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Block from "../block/Block";
import "./blocksSection.css";

function BlocksSection({ itemsList }) {
  const divClass = classNames("blocks-section", {
    "is-empty": itemsList.length === 0,
  });
  return (
    <div className={divClass}>
      {(itemsList.length === 0 && <div>No such thing...</div>) || (
        <>
          {itemsList.map((item) => (
            <Block item={item} key={item.title} />
          ))}
        </>
      )}
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

export default BlocksSection;
