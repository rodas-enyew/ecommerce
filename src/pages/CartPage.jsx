import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  {/*const handleCheckout = async () => {
    try {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart), //'cart' as your cart state
    });

    const data = await response.json();
    console.log('Order response:', data);
    alert('Order placed successfully!');
  } catch (error) {
    console.error('Error placing order:', error);
    alert('Checkout failed');
  }
}; */}

  const total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) ?? 0;

  return (
    <div className="text-black p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-600 pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded border border-black"
                />

                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-xl font-bold text-right mt-4">
            Total: ${total.toFixed(2)}
          </div> 
          <div>

          <button
            //onClick={handleCheckout}
            disabled={cart.length === 0}
            className={`px-5 py-2 ml-187 rounded-xl font-semibold transition ${
              cart.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            Checkout 
          </button> 
        </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

