import React from 'react'; 
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext'
import { Star } from 'lucide-react';



const Card = ({product}) => {
    const { addToCart, removeFromCart, isInCart } = useCart();
    const inCart = isInCart(product.id);
    const navigate = useNavigate();

    const handleCartToggle = (e) => {
        e.stopPropagation(); //stops bubbling
        //console.log('Button clicked');
        inCart ? removeFromCart(product.id) : addToCart(product);
    };

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    }

    return (
        <div 
        onClick={handleCardClick}
        className="bg-white shadow-md hover:shadow-2xl transition duration-300 rounded-2xl p-4 flex flex-col items-center cursor-pointer border border-gray-200"
        >
               <img 
               src={product.thumbnail} 
               alt={product.title} 
               className="w-48 h-48 object-cover rounded-xl border border-gray-200 mb-4  "
               />

               <h3 className="text-base font-semibold text-center mb-1">{product.title}</h3>
               <p className='text-sm text-gray-600 mb-2 line-clamp-2 text-center'> {product.description}</p>

               <div className='flex justify-between items-center w-full mb-2 '>
                <p className="text-lg font-bold text-black">${product.price}</p>
               </div>
               <div className=' w-full flex justify-flex text-yellow-500 text-sm'>
                <Star size={16} className='mr-1' />
                <span className="text-sm font-medium">{product.rating}</span>
               </div>
           
            <button 
            onClick={handleCartToggle}
            className={`w-60 mt-3  py-2 rounded-xl font-medium transition ${
                inCart ? "bg-red-500 hover:bg-red-700" : "bg-blue-400 hover:bg-blue-600"
            }`}
            >
               {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    )
};

export default Card;