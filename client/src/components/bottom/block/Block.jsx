import React from "react";
import PropTypes from "prop-types";
import "./block.css";

function Block({ item }) {
  const { title, desc, img } = item;
  return (
    <div className="block-container">
      <article>
        <a className="block" href="###">
          <div className="image-container">
            <img src={img} alt="img" />
          </div>
          <div className="block-text-container">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </a>
      </article>
    </div>
  );
}

Block.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};
export default Block;
