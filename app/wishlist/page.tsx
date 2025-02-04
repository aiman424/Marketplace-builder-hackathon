"use client";

import { useState } from "react";

// Define the type for a wishlist item
type WishlistItem = {
  _id: string;
  name: string;
};

export default function WishlistPage() {
  // Initialize wishlist with correct type
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-6">
            {wishlist.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm border"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                </div>
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
