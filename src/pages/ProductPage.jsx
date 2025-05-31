import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Sidebar, Star } from 'lucide-react';

const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const {addToCart, removeFromCart, isInCart } = useCart();

 
  const location = useLocation();
  const hideSidebarRoutes = ['/product/:id'];

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

      <div className='max-w-7xl ml-5 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 '>
  
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className='w-full h-[500px] object-cover rounded-2xl border border-gray-600 ' 
        />

        {/*product info */}
        <div >
          <h2 className="text-3xl text-black font-bold mb-2">{product.title}</h2>
          <p className="mb-2 text-black">{product.description}</p>
          <p className="text-lg text-gray-500 mb-2">${product.price}</p>
          <p className='mb-2 text-black'> {product.category} </p>
          <p className='mb-2 text-green-500'>{product.availabilityStatus}</p>

          <div className="flex items-center text-yellow-400 mb-4">
            <Star size={20} className="mr-1" />
            {product.rating}
          </div>


          <button
            onClick={() => {
              inCart ? removeFromCart(product.id) : addToCart(product);
            }}
            className={`px-4 py-2 rounded ${
              inCart
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>

        </div>

        <div className='mt-6'>
            <h2 className='text-xl text-black font-bold'> Product Description </h2>
            <p className='mt-3 mb-1 ml-3 font-medium'>Category: {product.category}</p>
            <p className='mb-1 ml-3 font-medium'>Warrenty Info: {product.warrantyInformation}</p>
            <p className='mb-1 ml-3 font-medium'>Return Policy: {product.returnPolicy}</p>
            <p className='mb-1 ml-3 font-medium'>Shipping Info: {product.shippingInformation}</p>
            <p className='mb-1 ml-3 font-medium'>Discount Percentage: {product.discountPercentage}</p>
            <p className='mb-1 ml-3 font-medium'>Min order quantity: {product.minimumOrderQuantity}</p>
            <p className='mb-1 ml-3 font-medium'>Sku: {product.sku}</p>
            <p className='mb-1 ml-3 font-medium'>Tags: {product.tags}<p/>

          </div>

      </div>
    )
}

export default ProductPage;