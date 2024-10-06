import React from 'react';

function Search({ query, setQuery }) {
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    // onSearchInput(e.target.value)
  };

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
