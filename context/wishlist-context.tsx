// "use client";

// import { createContext, useContext, useState, useCallback } from "react";
// import { Product } from "@/lib/types";
// import { toast } from "sonner";

// interface WishlistContextType {
//   items: Product[];
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (productId: number) => void;
//   isInWishlist: (productId: number) => boolean;
//   clearWishlist: () => void;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export function WishlistProvider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<Product[]>([]);

//   const addToWishlist = useCallback((product: Product) => {
//     setItems(currentItems => {
//       const exists = currentItems.some(item => item.id === product.id);
//       if (exists) {
//         toast.error(`${product.name} is already in your wishlist`);
//         return currentItems;
//       }
//       toast.success(`${product.name} added to wishlist`);
//       return [...currentItems, product];
//     });
//   }, []);

//   const removeFromWishlist = useCallback((productId: number) => {
//     setItems(currentItems => {
//       const item = currentItems.find(item => item.id === productId);
//       if (item) {
//         toast.info(`${item.name} removed from wishlist`);
//       }
//       return currentItems.filter(item => item.id !== productId);
//     });
//   }, []);

//   const isInWishlist = useCallback((productId: number) => {
//     return items.some(item => item.id === productId);
//   }, [items]);

//   const clearWishlist = useCallback(() => {
//     setItems([]);
//     toast.info("Wishlist cleared");
//   }, []);

//   return (
//     <WishlistContext.Provider
//       value={{
//         items,
//         addToWishlist,
//         removeFromWishlist,
//         isInWishlist,
//         clearWishlist,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export function useWishlist() {
//   const context = useContext(WishlistContext);
//   if (context === undefined) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// }

"use client"
import React, { createContext, useContext, useState } from 'react';

interface WishlistItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (product: WishlistItem) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((item) => item._id === product._id);
      if (!existingItem) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== productId)
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};