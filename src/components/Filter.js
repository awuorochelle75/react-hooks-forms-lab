import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
