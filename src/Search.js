import React from "react";

const Search = ({ search, onSearch }) => (
  <div>
    <input id="search" type="text" value={search} onChange={onSearch} />
  </div>
);

export default Search;
