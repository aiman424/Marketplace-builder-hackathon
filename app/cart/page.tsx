// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Minus, Plus, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/context/cart-context";

// export default function CartPage() {
//   const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
//   const shipping = totalPrice >= 500 ? "Free" : "$50";
//   const shippingCost = totalPrice >= 500 ? 0 : 50;
//   const total = totalPrice + (typeof shipping === "string" ? 0 : shippingCost);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

//       {items.length === 0 ? (
//         <div className="text-center py-12">
//           <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
//           <p className="text-muted-foreground mb-4">
//             Looks like you haven't added any items to your cart yet.
//           </p>
//           <Button asChild>
//             <Link href="/shop">Continue Shopping</Link>
//           </Button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="text-left p-4">Product</th>
//                     <th className="text-center p-4">Price</th>
//                     <th className="text-center p-4">Quantity</th>
//                     <th className="text-center p-4">Subtotal</th>
//                     <th className="p-4"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {items.map((item) => (
//                     <tr key={item.id} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center space-x-4">
//                           <div className="relative w-20 h-20">
//                             <Image
//                               src={item.image}
//                               alt={item.name}
//                               fill
//                               className="object-cover rounded"
//                             />
//                           </div>
//                           <span className="font-medium">{item.name}</span>
//                         </div>
//                       </td>
//                       <td className="text-center p-4">${item.price}</td>
//                       <td className="text-center p-4">
//                         <div className="flex items-center justify-center space-x-2">
//                           <button 
//                             className="p-1 hover:bg-gray-100 rounded"
//                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           >
//                             <Minus className="h-4 w-4" />
//                           </button>
//                           <span className="w-8 text-center">{item.quantity}</span>
//                           <button 
//                             className="p-1 hover:bg-gray-100 rounded"
//                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           >
//                             <Plus className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </td>
//                       <td className="text-center p-4">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </td>
//                       <td className="p-4">
//                         <button 
//                           className="p-1 hover:bg-gray-100 rounded"
//                           onClick={() => removeFromCart(item.id)}
//                         >
//                           <X className="h-4 w-4" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="p-4 flex justify-between">
//                 <Button variant="outline" asChild>
//                   <Link href="/shop">Return To Shop</Link>
//                 </Button>
//                 <Button variant="outline">Update Cart</Button>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg p-6">
//               <h2 className="text-xl font-bold mb-4">Cart Total</h2>
//               <div className="space-y-4">
//                 <div className="flex justify-between py-2 border-b">
//                   <span>Subtotal:</span>
//                   <span>${totalPrice.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b">
//                   <span>Shipping:</span>
//                   <span>{shipping}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b">
//                   <span>Total:</span>
//                   <span className="font-bold">${total.toFixed(2)}</span>
//                 </div>
//                 <div className="pt-4">
//                   <Input
//                     placeholder="Coupon Code"
//                     className="mb-2"
//                   />
//                   <Button variant="outline" className="w-full mb-4">
//                     Apply Coupon
//                   </Button>
//                   <Button className="w-full">
//                     Process to checkout
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react';
import { useCart } from '@/context/cart-context';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item._id)}
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
