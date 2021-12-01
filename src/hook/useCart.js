import { useEffect, useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // load from local storage
    const savedCartJson = window.localStorage.getItem('cart');
    setCart(JSON.parse(savedCartJson) || []);
  }, []);

  useEffect(() => {
    // save into local storage
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const addToCart = (productId) => {
    const alreadyAdded = cart.find(cartItem => cartItem.id === productId);
    const filteredCart = cart.filter(cartItem => cartItem.id !== productId);
    setCart([
      ...filteredCart,
      {
        id: productId,
        qty: alreadyAdded ? alreadyAdded.qty + 1 : 1,
      }
    ]);
  };

  const subtractFromCart = (productId) => {
    const productToSubtract = cart.find(cartItem => cartItem.id === productId);
    if (!productToSubtract) {
      return;
    }

    const filteredCart = cart.filter(cartItem => cartItem.id !== productId);
    if (productToSubtract.qty > 1) {
      setCart([
        ...filteredCart,
        {
          id: productId,
          qty: productToSubtract.qty - 1,
        }
      ]);
      return;
    }

    setCart([
      ...filteredCart,
    ]);
  };

  const clearCart = () => {
    setCart([]);
  }

  return {
    cart,
    addToCart,
    subtractFromCart,
    clearCart,
  }
};

export default useCart;