import React from "react";

const Filter = ({
  categories = [],
  selectedCategories = [],
  toggleCategory,
  searchTerm,
  setSearchTerm,
  handleResetFilters,
}) => {
  return (
    <aside className="w-full lg:w-64 bg-white p-4 rounded-xl shadow sticky top-6 h-fit">
      
      {/* Filters */}
      <div className="mb-9">
        <h2 className="text-xl font-extrabold mb-6">Filters</h2>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li
              key={category}
              className="flex items-center font-bold gap-2 cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                className="accent-blue-500"
              />
              <span className="capitalize">{category}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleResetFilters}
        className="mt-4 w-full text-sm bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default Filter;
