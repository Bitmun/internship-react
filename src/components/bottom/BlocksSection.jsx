import React from "react";
import PropTypes from "prop-types";

import Block from "./Block";

function BlocksSection({ itemsList }) {
  const classes =
    itemsList.length === 0 ? "blocks-section is-empty" : "blocks-section";
  return (
    <div className={classes}>
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
