import React from "react";
import PropTypes from "prop-types";
import "./search.css";

function Search({ handleSearch }) {
  return (
    <form className="search-form">
      <input
        id="search-input"
        type="text"
        placeholder="Search..."
        className="search-input"
        onChange={(e) => {
          handleSearch(e.target.value.trim().toLowerCase());
        }}
      />
    </form>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
