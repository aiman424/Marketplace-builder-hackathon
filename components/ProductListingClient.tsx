// import React from 'react';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';

// interface Product {
//   id: string;
//   name: string;
//   image: any; // Ensure compatibility with SanityImageSource
//   price: number;
// }

// const ProductListings = ({ product }: { product: Product }) => {
//   const imageUrl = product.image ? urlFor(product.image).url() : '/placeholder-image.png'; // Handle missing or invalid images

//   return (
//     <div>
//       {/* Product List */}
//       <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 object-cover">
//         <Link href={`/Product/${product.id}`}>
//           <Image
//             src={imageUrl}
//             alt={product.name || 'Product Image'}
//             height={300}
//             width={300}
//             className="h-[250px] w-full "
//           />
//         </Link>
//         {/* Product Details */}
//         <div className="p-4 text-center">
//           {/* Product Name */}
//           <p className="text-lg font-medium text-gray-800">{product.name}</p>
//           {/* Product Price */}
//           <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListings;

// import { useCart } from '@/context/cart-context';
// import { useWishlist } from '@/context/wishlist-context';
// import Link from 'next/link';
// import Image from 'next/image';

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   features: string;
//   quantity: number;
// };

// type ProductListProps = {
//   products: Product[];
// };

// export default function ProductList({ products }: ProductListProps) {
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   return (
//     <div>
//       <h1 className="text-center text-[30px]">Product List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 object-cover">
//         {products.map((product) => (
//           <div
//             className="border p-4 rounded-lg shadow-sm flex flex-col items-center object-cover"
//             key={product._id}
//           >
//             <Link href={`product/${product._id}`}>
//               <Image
//                 src={product.imageUrl || "/placeholder.png"}
//                 alt={product.name}
//                 width={500}
//                 height={400}
//                 className="w-full object-cover"
//               />
//             </Link>
//             <h2 className="text-xl font-bold text-center">{product.name}</h2>
//             <p className="text-center text-gray-600">${product.price}</p>
//             <p className="text-center">{product.description}</p>
//             <p className="text-center">{product.features}</p>
//             <p className="text-center">{product.quantity}</p>
//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-blue-500 text-white p-2 rounded mt-2"
//             >
//               Add to Cart
//             </button>
//             {/* Add to Wishlist Button */}
//             <button
//               onClick={() => addToWishlist(product)}
//               className="bg-green-500 text-white p-2 rounded mt-2"
//             >
//               Add to Wishlist
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"; // Mark this as a client component

import { useCart } from '@/context/cart-context';
import { useWishlist } from '@/context/wishlist-context';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string;
  quantity: number;
};

export default function ProductListClient({ products }: { products: Product[] }) {
  // Use Cart and Wishlist context
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div>
      <h1 className="text-center text-[30px]">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 object-cover">
        {products.map((product) => (
          <div
            className="border p-4 rounded-lg shadow-sm flex flex-col items-center object-cover"
            key={product._id}
          >
            <Link href={`product/${product._id}`}>
              <Image
                src={product.imageUrl || "/placeholder.png"} // Use product.imageUrl
                alt={product.name}
                width={500}
                height={400}
                className="w-full object-cover"
              />
            </Link>
            <h2 className="text-xl font-bold text-center">{product.name}</h2>
            <p className="text-center text-gray-600">${product.price}</p>
            <p className="text-center">{product.description}</p>
            <p className="text-center">{product.features}</p>
            <p className="text-center">{product.quantity}</p>
            {/* Add to Cart Button */}
            <Link href={'/cart'}>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white p-2 rounded mt-2"
              >
                Add to Cart
              </button>
            </Link>
            {/* Add to Wishlist Button */}
            <button
              onClick={() => addToWishlist(product)}
              className="bg-green-500 text-white p-2 rounded mt-2"
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}