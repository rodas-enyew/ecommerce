import React from 'react';

const Filter = () => {
    return (
    <div className='text-black-500'>
        <h2 className='text-lg font-bold mb-2'> Filters </h2>
        <ul className='space-y-2'>
            <li><input type="checkbox" /> Category </li>
            <li><input type="checkbox" /> Category </li>
            <li><input type="checkbox" /> Category</li>
        </ul>
    </div>
    );
};

export default Filter;