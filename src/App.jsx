import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from "./components/Nav";
import Filter from "./components/Filter.jsx";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from './pages/CartPage';

const App = () => {
  const location = useLocation();


  return (
    <div className='flex flex-col min-h-screen'>
      <Nav/>
      <div className='flex flex-1'>
        {location.pathname === '/' && (
          <aside className='w-64 p-4 hidden md:block'>
          <Filter/>
        </aside>
        )}

        
        <main className='flex-1 p-4'>
          <Routes> {/*path + component rendered*/}
            <Route path='/' element= {<Home/>} />
            <Route path='/product/:id' element= {<ProductPage/> } />
            <Route path='/cart' element= {<CartPage/>} />
          </Routes>
          {/* makes nav and filter stay on all pages */}
        </main>
      </div>
    </div>
  );
};

export default App
