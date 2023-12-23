import React from "react";
import "./bottom.css";
import PropTypes from "prop-types";

function Block({ item }) {
  const { title, desc, img } = item;
  return (
    <div className="block-container">
      <article className="block-wrapper">
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
