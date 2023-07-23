import React from "react";
import { useState } from "react";

function SearchBar({ searchInput, setSearchInput }) {
  function searchInputHandler(e) {
    setSearchInput(e.target.value);
  }
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="input-search"
        onChange={searchInputHandler}
        placeholder="Type to Filter..."
      />
    </div>
  );
}

export default SearchBar;
