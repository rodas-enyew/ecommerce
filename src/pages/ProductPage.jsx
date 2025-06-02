import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';
import Loading  from '../components/Loading';

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

    if(!product) return <Loading/>

    const inCart = isInCart(product.id);

    return (

      <div className='max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-10 '>
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className='w-130 h-100 object-cover rounded-xl border border-gray-500' 
        />

        {/*product info */}
        <div  className='space-y-4 mr-9'>
          <h2 className="text-3xl text-black font-bold ">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl text-gray-900 font-semibold">${product.price}</p>
          <p className='text-sm text-gray-500 italic'> {product.category} </p>
          <p className='mb-2 text-green-500'>{product.availabilityStatus}</p>
          <div className="flex items-center text-yellow-400 mb-4">
            <Star size={20} className="mr-1" />
            {product.rating}
          </div>


          <button
            onClick={() => {
              inCart ? removeFromCart(product.id) : addToCart(product);
            }}
            className={`w-60 mt-3  py-2 rounded-xl font-medium transition ${
              inCart
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>

        <div className='mt-8  p-4 rounded-lg space-y-2'>
            <h2 className='text-lg font-bold text-black'> Product Description </h2>
            <p className='mt-3 mb-1 ml-3 font-medium'>Category: {product.category}</p>
            <p className='mb-1 ml-3 font-medium'>Warrenty Info: {product.warrantyInformation || "Not provided"}</p>
            <p className='mb-1 ml-3 font-medium'>Return Policy: {product.returnPolicy}</p>
            <p className='mb-1 ml-3 font-medium'>Shipping Info: {product.shippingInformation}</p>
            <p className='mb-1 ml-3 font-medium'>Discount Percentage: {product.discountPercentage}</p>
            <p className='mb-1 ml-3 font-medium'>Min order quantity: {product.minimumOrderQuantity}</p>
            <p className='mb-1 ml-3 font-medium'>Sku: {product.sku}</p>
            <p className='mb-1 ml-3 font-medium'>Tags: {product.tags}/</p>

          </div>

      </div>
    )
}

export default ProductPage;