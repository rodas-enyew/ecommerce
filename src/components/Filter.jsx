import React from 'react';

const Filter = ({
  categories = [],
  selectedCategories = [],
  toggleCategory,
  searchTerm,
  setSearchTerm,
  handleResetFilters,
}) => {
  return (
    <aside className="w-full lg:w-64 bg-white p-4 rounded-xl shadow sticky top-4 h-fit">
      {/* Search Bar */}
      <div className="mb-6">
        <h2 className=" font-semibold mb-2">Search</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Filters */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category} 
            className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
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