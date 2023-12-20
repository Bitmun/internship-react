import React from "react";
import "../styles.css";

function Search() {
  return (
    <form className="search-form">
      <input
        id="search-input"
        type="text"
        placeholder="Search..."
        className="search-input"
      />
    </form>
  );
}

export default Search;
