"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import Header from "./Header"; // Replace with your Header component import
import { urlFor } from "@/sanity/lib/client"; // Ensure this is correctly set up

type ProductDetailProps = {
  product: {
    _id: string;
    name: string;
    price: number;
    image: { asset: { _ref: string } };
    description: string;
    category: string;
    features: string;
    dimensions: string;
  };
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: urlFor(product.image).url(),
      quantity: 1,
    });

    setNotification(`${product.name} has been added to the cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    setNotification(
      `${product.name} has been ${isWishlisted ? "removed from" : "added to"} the wishlist.`
    );
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6 md:p-12">
      <Header logo={""} navLinks={[]} />

      {notification && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white py-3 px-4 text-center shadow-md z-50">
          {notification}
        </div>
      )}

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-12 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 bg-teal-100"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-700 font-semibold">Price: ${product.price}</p>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-500">(5 Customer Reviews)</span>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-6">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
            <button
              className={`${
                isWishlisted ? "bg-red-500" : "bg-gray-300"
              } text-white px-6 py-3 rounded-lg hover:bg-red-600 transition`}
              onClick={handleWishlistToggle}
            >
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div className="space-y-4 mt-6">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Category:</span>
              <span className="font-medium text-gray-800">{product.category}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Tags:</span>
              <span className="font-medium text-gray-800">{product.features}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Dimensions:</span>
              <span className="font-medium text-gray-800">{product.dimensions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;