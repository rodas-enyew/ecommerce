import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => setCart((prev) => [...prev, product]);
    const removeFromCart = (id) =>
        setCart((prev) => prev.filter((item) => item.id !== id));
    const isInCart = (id) => cart.some((item) => item.id === id);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};