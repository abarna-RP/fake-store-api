import React from 'react';

function CartModal({ isOpen, closeModal, cartItems, removeFromCart }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"> {/* Added z-index */}
      <div className="bg-white p-4 rounded w-full max-w-md overflow-y-auto max-h-[80vh]"> {/* Added overflow and max height */}
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between mb-2 border-b pb-2">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-2" />
                  <div>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={closeModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;