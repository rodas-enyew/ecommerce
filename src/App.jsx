import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from "./pages/ProductPage";
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav/>
        <main className='flex-1 p-4'>
          <Routes> {/*path + component rendered*/}
            <Route path='/' element= {<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product/:id' element= {<ProductPage/> } />
            <Route path='/cart' element= {<CartPage/>} />
          </Routes>
          {/* makes nav and filter stay on all pages */}
        </main>
      </div>
   
  );
}

export default App
