// "use client";

// import { createContext, useContext, useState, useCallback } from "react";
// import { Product, CartItem } from "@/sanity/lib/query";
// import { toast } from "sonner";

// interface CartContextType {
//   items: CartItem[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: number) => void;
//   updateQuantity: (productId: number, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: number;
//   totalPrice: number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([]);

//   const addToCart = useCallback((product: Product) => {
//     setItems(currentItems => {
//       const existingItem = currentItems.find(item => item.id === product.id);
      
//       if (existingItem) {
//         toast.success(`Added another ${product.name} to cart`);
//         return currentItems.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
      
//       toast.success(`${product.name} added to cart`);
//       return [...currentItems, { ...product, quantity: 1 }];
//     });
//   }, []);

//   const removeFromCart = useCallback((productId: number) => {
//     setItems(currentItems => {
//       const item = currentItems.find(item => item.id === productId);
//       if (item) {
//         toast.info(`${item.name} removed from cart`);
//       }
//       return currentItems.filter(item => item.id !== productId);
//     });
//   }, []);

//   const updateQuantity = useCallback((productId: number, quantity: number) => {
//     if (quantity < 1) return;
//     setItems(currentItems =>
//       currentItems.map(item =>
//         item.id === productId ? { ...item, quantity } : item
//       )
//     );
//   }, []);

//   const clearCart = useCallback(() => {
//     setItems([]);
//     toast.info("Cart cleared");
//   }, []);

//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   return (
//     <CartContext.Provider
//       value={{
//         items,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         totalItems,
//         totalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }

"use client"

import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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