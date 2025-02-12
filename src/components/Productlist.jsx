import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border rounded p-4 bg-white shadow"> {/* Added bg, shadow */}
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;