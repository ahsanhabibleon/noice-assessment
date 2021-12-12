import React from "react";
import "./search-box.scss";

function SearchBox({ onChange, onSubmit, onKeyDown }) {
  return (
    <div className="search-bar text-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by categories"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button className="search-btn" type="submit" onClick={onSubmit}>
        Search for Media
      </button>
    </div>
  );
}

export default SearchBox;
