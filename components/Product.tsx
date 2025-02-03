import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Product = {
  [x: string]: SanityImageSource;
  _id: string;
  imageUrl: string;
  title: string;
  price: string;
};

const products: Product[] = [
  {
    _id: 'product_1',
    imageUrl: '/sofa.png',
    title: 'The Popular Suede Sofa',
    price: '£980',
  },
  {
    _id: 'product_2',
    imageUrl: '/chair.png',
    title: 'The Dandy Chair',
    price: '£250',
  },
  {
    _id: 'product_3',
    imageUrl: '/blackchair.png',
    title: 'The Black Dandy Chair',
    price: '£250',
  },
];

const Product = () => {
  return (
    <div className='md:w-[1358px] md:h-[744px] md:mt-0 mt-[100px]'>
      {/* Heading */}
      <div className='w-[330px] h-[45px] ml-[80px] pt-20'>
        <h1 className='text-[32px] font-[Clash Display]'>Our Popular Products</h1>
      </div>

      {/* Product List */}
      <div className='md:w-[1358px] md:h-[470px] w-[390px] h-[430px] md:flex grid grid-cols-2 gap-[6px] mt-[70px]'>
        {products.map((product) => (
          <div
            key={product._id}
            className='w-[305px] h-[462px] md:ml-[20px] ml-[6px]'
          >
            {/* Product Image */}
            <div className='md:w-[305px] md:h-[375px] w-[200px] h-[251px]'>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={400}
              />
            </div>

            {/* Product Info */}
            <div className='md:w-[154px] w-[145px] h-[63px]'>
              <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>
                {product.title}
              </h1>
              <p className='text-[18px] font-[Satoshi] pt-[15px]'>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <Link href={'/productListing'} target='_blank'>
        <button className='md:w-[170px] w-[342px] h-[56px] md:mt-[30px] md:ml-[580px] ml-[40px] px-[28px] py-[16px] bg-[#1b3c57]'>
          View Collection
        </button>
      </Link>
    </div>
  );
};

export default Product;
