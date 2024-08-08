import React from "react";
import { useState } from "react";

function Search({ onSearchInput }) {

const [query, setQuery] = useState("")

const handleSearchChange = (e) => {
  const newQuery = e.target.value
  setQuery(newQuery)
  onSearchInput(newQuery)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
