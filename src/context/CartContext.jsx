/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (indexToRemove) => {
    const removedItem = cart[indexToRemove];
    setCart((prev) => prev.filter((_, i) => i !== indexToRemove));
    localStorage.setItem("lastRemoved", JSON.stringify(removedItem));
  };

  const undoRemove = () => {
    const last = localStorage.getItem("lastRemoved");
    if (last) {
      const product = JSON.parse(last);
      addToCart(product);
      localStorage.removeItem("lastRemoved");
    }
  };

  const clearCart = () => setCart([]);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, undoRemove, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};
