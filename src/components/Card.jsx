import React from 'react'; 
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext'
import { Star } from 'lucide-react';



const Card = ({product}) => {
    const { addToCart, removeFromCart, isInCart } = useCart();
    const inCart = isInCart(product.id);
    const navigate = useNavigate();

    const handleCartToggle = (e) => {
        //e.preventDefault(); //prevents link nav
        e.stopPropagation(); //stops bubbling
        console.log('Button clicked');
        inCart ? removeFromCart(product.id) : addToCart(product);
    };

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    }


    return (
        <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center text hover:shadow-lg hover:bg-gray-200 transition"
        onClick={handleCardClick}
        >

               <img 
               src={product.thumbnail} 
               alt={product.title} 
               className="w-70 h-60 object-cover items-center rounded mb-3 "
               />

               <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
               <p className='text-sm mb-1 line-clamp-2'> {product.description}</p>

               <div className='w-full flex justify-flex'>
                <p className="text-sm text-gray-600 mb-1">${product.price}</p>
               </div>

               <div className=' w-full flex justify-flex text-yellow-400 text-sm'>
                <Star size={16} className='mr-1' />
                {product.rating}
               </div>
           
            <button 
            onClick={handleCartToggle}
            className={`mt-3 px-3 py-1 rounded transition ${
                inCart ? "bg-red-500 hover:bg-red-700" : "bg-blue-400 hover:bg-blue-600"
            }`}
            >
               {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    )
};

export default Card;