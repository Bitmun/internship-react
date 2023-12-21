import React from "react";
import "../styles.css";

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
  handleSearch: Function.isRequired,
};

export default Search;
