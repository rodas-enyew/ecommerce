import * as React from 'react';

const Filter = ({ 
    categories=[],
    selectedCategories=[], 
    toggleCategory, 
    searchTerm, 
    setSearchTerm,
    handleResetFilters,
}) => {


    return (
        <div className='text-black'>
            <h1 className='text-xl font-bold mb-5'> Filters </h1>

            <input 
            type="text"
            placeholder='Search products...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border border-gray-300 rounded focus:outline-none focus:ring focus:border-gray-600 px-4 py-2 w-full mb-6'
            />

            <ul className='space-y-3'>
                {categories.map(category => (
                    <li key={category}>
                        <label className='flex items-center gap-3 font-semibold font-mono'>
                            <input 
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                             />
                             {category.charAt(0).toUpperCase() + category.slice(1)}
                        </label>
                    </li>
                ))}
            </ul>

            <button
            onClick={handleResetFilters}
            className='bg-red-500 text-white font-semibold font-mono py-1 w-50 mt-10 mr-2 rounded-lg hover:bg:red-700'
            >
                Reset Filters
            </button>
        </div>
    
    );
};

export default Filter;