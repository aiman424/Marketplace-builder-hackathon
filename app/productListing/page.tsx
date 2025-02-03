// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allproducts } from "@/sanity/lib/query";
// import Header from "@/components/Header";
// import Image from "next/image";
// import Link from "next/link";

// type Product = {
//   category: string;
//   dimensions: string;
//   features: string;
//   quantity: number;
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// export default async function ProductListing() {
//   const products: Product[] = await sanityFetch({ query: allproducts });
//   console.log("Fetched products:", products); 

//   return (
//     <div>
//       <Header logo={""} navLinks={[]}/>
//       <div className="relative text-black">
//           <Image
//             src="/shop.jpeg" // Replace with the correct image file path
//             alt="Shop Banner"
//             height={400}
//             width={1600}
//             className="w-full h-40 md:h-auto object-cover"
//           />
//           <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
//             Shop
//           </h1>
//           {/* Breadcrumb Section */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//             <p className="text-rose-900 text-xs md:text-xl flex items-center">
//               <Link href="/" className="font-bold hover:underline">
//                 Home
//               </Link>
//               <span className="font-bold mx-2">{'>'}</span>
//               <Link href="/productListing" className="font-bold hover:underline">
//                 Shop
//               </Link>
//             </p>
//           </div>



//       <h1 className="text-center text-[30px]">Product List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 object-cover">
//         {products.map((product) => (
//           <div
//             className="border p-4 rounded-lg shadow-sm flex flex-col items-center object-cover"
//             key={product._id}
//           >
//             <Link href={`product/${product._id}`}>
//             <Image
//               src={product.imageUrl || "/placeholder.png"} 
//               alt={product.name}
//               width={500}
//               height={400}
//               className="w-full object-cover;"
//             /></Link>
//             <h2 className="text-xl font-bold text-center">{product.name}</h2>
//             <p className="text-center text-gray-600">${product.price}</p>
//             <p className="text-center">{product.description}</p>
//             <p className="text-center">{product.features}</p>
//             <p className="text-center">{product.quantity}</p>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// }


// // import { sanityFetch } from "@/sanity/lib/fetch";
// // import { allproducts } from "@/sanity/lib/query";
// // import Header from "@/components/Header";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useCart } from "@/context/cart-context"; // Import Cart context
// // import { useWishlist } from "@/context/wishlist-context"; // Import Wishlist context

// // type Product = {
// //   category: string;
// //   dimensions: string;
// //   features: string;
// //   quantity: number;
// //   _id: string;
// //   name: string;
// //   description: string;
// //   price: number;
// //   imageUrl: string;
// // };


// // export default async function ProductListing() {
// //   const products: Product[] = await sanityFetch({ query: allproducts });
// //   const { addToCart } = useCart(); // Get addToCart function from CartContext
// //   const { addToWishlist } = useWishlist(); // Get addToWishlist function from WishlistContext

// //   return (
// //     <div>
// //       <Header logo={""} navLinks={[]} />
// //       <div className="relative text-black">
// //         <Image
// //           src="/shop.jpeg"
// //           alt="Shop Banner"
// //           height={400}
// //           width={1600}
// //           className="w-full h-40 md:h-auto object-cover"
// //         />
// //         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
// //           Shop
// //         </h1>
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
// //           <p className="text-rose-900 text-xs md:text-xl flex items-center">
// //             <Link href="/" className="font-bold hover:underline">
// //               Home
// //             </Link>
// //             <span className="font-bold mx-2">{'>'}</span>
// //             <Link href="/productListing" className="font-bold hover:underline">
// //               Shop
// //             </Link>
// //           </p>
// //         </div>
// //         <h1 className="text-center text-[30px]">Product List</h1>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 object-cover">
// //           {products.map((product) => (
// //             <div
// //               className="border p-4 rounded-lg shadow-sm flex flex-col items-center object-cover"
// //               key={product._id}
// //             >
// //               <Link href={`product/${product._id}`}>
// //                 <Image
// //                   src={product.imageUrl || "/placeholder.png" }
// //                   alt={product.name}
// //                   width={500}
// //                   height={400}
// //                   className="w-full object-cover"
// //                 />
// //               </Link>
// //               <h2 className="text-xl font-bold text-center">{product.name}</h2>
// //               <p className="text-center text-gray-600">${product.price}</p>
// //               <p className="text-center">{product.description}</p>
// //               <p className="text-center">{product.features}</p>
// //               <p className="text-center">{product.quantity}</p>
// //               {/* Add to Cart Button */}
// //               <button
// //                 onClick={() => addToCart(product)}
// //                 className="bg-blue-500 text-white p-2 rounded mt-2"
// //               >
// //                 Add to Cart
// //               </button>
// //               {/* Add to Wishlist Button */}
// //               <button
// //                 onClick={() => addToWishlist(product)}
// //                 className="bg-green-500 text-white p-2 rounded mt-2"
// //               >
// //                 Add to Wishlist
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

import { useCart } from '@/context/cart-context';
import { useWishlist } from '@/context/wishlist-context';
import Link from 'next/link';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/fetch';
import { allproducts } from '@/sanity/lib/query';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string;
  quantity: number;
};

export default async function ProductListing() {
  // Fetch products from Sanity
  const products: Product[] = await sanityFetch({ query: allproducts });

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
            </button></Link>
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