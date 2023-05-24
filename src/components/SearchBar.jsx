import React from 'react'

function SearchBar(props) {
  const handleSearchChange=(event)=>( props.setSearchInput(event.target.value))
  return (
    <div><h4>Search</h4>
    <input type="text" name="search" onChange={handleSearchChange} value={props.searchInput}/>
    </div>
  )
}

export default SearchBar