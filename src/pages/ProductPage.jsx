import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const {addToCart, removeFromCart, isInCart } = useCart();

    useEffect(() =>{
        const fetchProduct = async () => {
            try {
                const respond = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await respond.json();
                setProduct(data);
            } catch (err) {
                console.error("Failed to fetch product", err);
            }
        };

        fetchProduct();
    }, [id]);

    if(!product) return <div className='text-blue'> Loading... </div>

    const inCart = isInCart(product.id);

    return (
        <div className='max-w-4xl mx-auto text-white p-4 grid grid-cols-1 md:grid-cols-2 gap-8 '>
            <img 
            src={product.thumbnail} 
            alt={product.title}
            className='w-full h-80 object-cover rounded-lg border-1 border-black ' 
            />
            <div>
        <h2 className="text-2xl text-black font-bold mb-2">{product.title}</h2>
        <p className="text-lg text-gray-500 mb-2">${product.price}</p>
        <p className="mb-4 text-black">{product.description}</p>
        <div className="flex items-center text-yellow-400 mb-4">
          <Star size={20} className="mr-1" />
          {product.rating}
        </div>
        <button
          onClick={() =>
            inCart ? removeFromCart(product.id) : addToCart(product)
          }
          className={`px-4 py-2 rounded ${
            inCart
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
            </div>
        </div>
    )
}

export default ProductPage;