import React from "react";

function Category({ catItem, filteredItems }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          filteredItems(catItem);
        }}
        type="button"
      >
        {catItem}
      </button>
    </>
  );
}

export default Category;
