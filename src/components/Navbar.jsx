import React from 'react';

function Navbar({ cartCount, openModal }) {
  return (
    <nav className="bg-gray-800 p-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">THE ONLINE STORE</h1>
        <div className="flex items-center">
          <button onClick={openModal} className="relative">
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
