import React, { useState } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import Filter from "./Filter"; 

function ShoppingList({ items, onItemFormSubmit }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSearchChange(searchTerm) {
    setSearch(searchTerm);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  
  const itemsToDisplay = items.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} /> 
      <Filter
        searchTerm={search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
