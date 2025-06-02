 import React from "react";

 const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return(
        <div className="flex justify-center mt-6 gap-4 text-black">
            <button 
            disable={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="px-4 py-2 border border-black hover:bg-gray-600 rounded disable:opacity-50 transition"
            >
                Prev 
            </button>

            {[...Array(totalPages)].map((__, i) => (
                <button
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={`px-4 py-2 rounded ${currentPage === i + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-grey-500 hover:bg-blue-400'
                } transition`}
                >
                    {i + 1 }
                </button>
            ))}

            <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="px-4 py-2 border border-black hover:bg-gray-700 rounded disabled:opacity-50 transition"
            >
                Next
            </button>
        </div>
    )
 }

 export default Pagination;