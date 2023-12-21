import React from "react";
import Block from "./Block";

function BlocksSection({ itemsList }) {
  const classes =
    itemsList.length === 0 ? "blocks-section is-empty" : "blocks-section";
  return (
    <div className={classes}>
      {(itemsList.length === 0 && <div>No such thing...</div>) || (
        <>
          {itemsList.map((item) => (
            <Block item={item} />
          ))}
        </>
      )}
    </div>
  );
}

BlocksSection.propTypes = {
  itemsList: Array.isRequired,
};

export default BlocksSection;
