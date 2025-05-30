import * as React from 'react';

const Filter = ({ categories=[], selectedCategories=[], toggleCategory, searchTerm, setSearchTerm}) => {

    return (
        <div className='text-black'>
            <h1 className='text-xl font-bold mb-5'> Filters </h1>

            <input 
            type="text"
            placeholder='Search products...'
            value={searchTerm}
            onChange={() => setSearchTerm(e.category.value)}
            className='border border-black rounded-2xl px-2 py-2 w-full mb-6'
            />

            <ul className='space-y-3'>
                {categories.map(category => (
                    <li key={category}>
                        <label className='flex items-center gap-3'>
                            <input 
                            type="radio"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                             />
                             {category}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    
    );
};

export default Filter;