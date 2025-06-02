import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'lucide-react';
import { useCart } from '../context/CartContext';


const Nav = () => {
    const {cart} = useCart();

    return (
        <nav className='flex items-center justify-between bg-black text-white px-8 py-4 shadow-md'> 

        {/*Logo*/}
            <Link to="/" className="text-2xl font-extrabold tracking-wide hover:text-green-400 transition">
        ShopZone
      </Link>

      {/*Nav links*/}
            <div className='space-x-70 hidden md:flex text-md font-bold '>
                <Link to="/about" className='hover:text-green-400 transition '> About </Link>
                <Link to="/" className='hover:text-green-400 transition'> Home </Link>
                <Link to="/contact" className='hover:text-green-400 transition'> Contact </Link>               
            </div>

            {/*cart icon*/}
            <Link to="/cart" className='relative flex items-center hover:text-green-400 transition' >
            <ShoppingCart size={24} />
            {cart.length  > 0 && (
                <span className='absolute -top-2 -right-2 bg-green-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce'>
                    {cart.length}
                </span>
            )}
            </Link>
        </nav>
    )
}

export default Nav;