import React from 'react';

function SearchBar(props) {
  const handleSearchChange = (event) =>
    props.setSearchInput(event.target.value);
  const handleCheckBoxChange = (event) => {
    console.log('props.checkInput', props.checkInput);
    props.setCheckInput(event.target.checked);
  };
  return (
    <div>
      <h4>Search</h4>
      <input
        type="text"
        name="search"
        onChange={handleSearchChange}
        value={props.searchInput}
      />
      <h5>Only show products in stock</h5>
      <input
        type="checkbox"
        onChange={handleCheckBoxChange}
        value={props.checkInput}
      />
    </div>
  );
}

export default SearchBar;
