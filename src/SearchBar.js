import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
