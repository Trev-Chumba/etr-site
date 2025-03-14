import { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load saved items from localStorage on mount (optional)
  //   useEffect(() => {
  //     const savedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //     setCartItems(savedItems);
  //   }, []);

  //   // Sync with localStorage (optional)
  //   useEffect(() => {
  //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   }, [cartItems]);

  // Add Item
  const addItem = (item) => {
    setCartItems((prev) => {
      if (prev.some((cartItem) => cartItem === item)) {
        return prev; // Item already exists, return the same array
      }
      return [...prev, item]; // Add item if it's not in the cart
    });
    console.log('item', item);
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((cartId) => cartId !== id);
      return updatedCart;
    });
  };

  const clearItems = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => useContext(CartContext);
