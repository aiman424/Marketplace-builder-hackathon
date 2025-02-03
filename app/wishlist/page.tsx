// "use client";

// import { Button } from "@/components/ui/button";
// import { Heart, Trash2, ShoppingCart } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useWishlist } from "@/context/wishlist-context";
// import { useCart } from "@/context/cart-context";

// export default function WishlistPage() {
//   const { items, removeFromWishlist } = useWishlist();
//   const { addToCart } = useCart();

//   const handleAddToCart = (product: any) => {
//     addToCart(product);
//     removeFromWishlist(product.id);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Wishlist ({items.length})</h1>
      
//       {items.length === 0 ? (
//         <div className="text-center py-12">
//           <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
//           <p className="text-muted-foreground mb-4">
//             Add items you love to your wishlist. Review them anytime and easily move them to the cart.
//           </p>
//           <Button asChild>
//             <Link href="/shop">Continue Shopping</Link>
//           </Button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {items.map((item) => (
//             <div key={item.id} className="border rounded-lg p-4 relative group">
//               <button 
//                 className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-red-50 transition-colors"
//                 onClick={() => removeFromWishlist(item.id)}
//               >
//                 <Trash2 className="h-5 w-5 text-red-500" />
//               </button>
//               <div className="aspect-square relative mb-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//               <h3 className="font-semibold mb-2">{item.name}</h3>
//               <p className="text-lg font-bold mb-4">${item.price}</p>
//               <Button className="w-full" onClick={() => handleAddToCart(item)}>
//                 <ShoppingCart className="h-4 w-4 mr-2" />
//                 Add to Cart
//               </Button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react';
import { useWishlist } from '@/context/wishlist-context';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => removeFromWishlist(item._id)}
                className="bg-red-500 text-white p-2 rounded mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
