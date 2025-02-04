// import React from 'react';
// import { useWishlist } from '@/context/wishlist-context';

// export default function WishlistPage() {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <p>Your wishlist is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {wishlist.map((item) => (
//             <div key={item._id} className="border p-4 rounded-lg">
//               <h2 className="text-xl font-bold">{item.name}</h2>
//               <p>Price: ${item.price}</p>
//               <button
//                 onClick={() => removeFromWishlist(item._id)}
//                 className="bg-red-500 text-white p-2 rounded mt-2"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client"; // Mark this as a client component

import { useState } from "react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([
    { _id: "1", name: "Product 1" },
    { _id: "2", name: "Product 2" },
  ]); // Replace this with actual wishlist data from context/state

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
