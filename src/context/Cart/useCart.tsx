import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContextProps, CartItem } from "./useCart.Interface";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Fetch cart from localStorage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem("cartValue");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cartValue", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: CartItem, userId:number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id && cartItem.userId === userId);

      if (existingItem) {
        return prevCart
      }

      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: string, userId:number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id && cartItem.userId !== userId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cartValue");
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
