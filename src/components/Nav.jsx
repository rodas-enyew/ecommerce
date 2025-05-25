import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'lucide-react';
import { useCart } from '../context/CartContext';


const Nav = () => {
    const {cart} = useCart();


    return (
        <nav className='flex items-center justify-between bg-black text-white px-6 py-4 border-b border-black'> 

            <div className='text-xl font-bold'> Logo </div>

            <div className='space-x-30 hidden md:flex '>
                <Link to="/" className='hover:underline '> About </Link>
                <Link to="/" className='hover:underline'> Home </Link>
                <Link to="/" className='hover:underline'> Contact </Link>               
            </div>

            <Link to="/cart" className='relative flex items-center space-x-1 hover:text-gray-300' >
            <ShoppingCart size={24} />
            {cart.length  > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center animate-pulse'>
                    {cart.length}
                </span>
            )}
            </Link>
        </nav>
    )
}

export default Nav;