import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS (Tailwind should be configured here)
import ProductList from './components/Productlist';
import Navbar from './components/Navbar';
import CartModal from './components/Cartmodel';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-100 min-h-screen"> {/* Added background and min height */}
      <Navbar cartCount={cart.length} openModal={openModal} />
      <div className="container mx-auto p-4"> {/* Added container for centering */}
        <ProductList products={products} addToCart={addToCart} />
      </div>
      <CartModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        cartItems={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;














