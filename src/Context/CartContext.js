import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      }
      return [...prevCart, {...product, quantity: 1}];
    });
  };

  const clearCart = () => setCart([]);

  const increaseQuantity = id => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decreaseQuantity = id => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id && item.quantity > 1
            ? {...item, quantity: item.quantity - 1}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{cart, addToCart, clearCart, increaseQuantity, decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
