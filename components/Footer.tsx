import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import Link from 'next/link';


const Footer = () => {
  return (  
<footer className="bg-[#2A254B] py-10">
  <div className="container mx-auto px-4">
    {/* Main Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Menu */}
      <div>
        <h2 className="font-[Clash Display] text-[16px] text-white tracking-widest mb-3">Menu</h2>
        <ul className="list-none space-y-3">
          <li><p className="text-white font-[Satoshi]">New Arrivals</p></li>
          <li><p className="text-white font-[Satoshi]">Best Sellers</p></li>
          <li><p className="text-white font-[Satoshi]">Recently Viewed</p></li>
          <li><p className="text-white font-[Satoshi]">Popular This Week</p></li>
          <li><p className="text-white font-[Satoshi]">All Products</p></li>
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h2 className="font-[Clash Display] text-[16px] text-white tracking-widest mb-3">Categories</h2>
        <ul className="list-none space-y-3">
          <li><p className="text-white font-[Satoshi]">Crockery</p></li>
          <li><p className="text-white font-[Satoshi]">Furniture</p></li>
          <li><p className="text-white font-[Satoshi]">Homeware</p></li>
          <li><p className="text-white font-[Satoshi]">Plant Pots</p></li>
          <li><Link href="/product-detail"><p className="text-white font-[Satoshi]">Chairs</p></Link></li>
        </ul>
      </div>

      {/* Our Company */}
      <div>
        <h2 className="font-[Clash Display] text-[16px] text-white tracking-widest mb-3">Our Company</h2>
        <ul className="list-none space-y-3">
          <li><Link href="/about"><p className="text-white font-[Satoshi]">About Us</p></Link></li>
          <li><p className="text-white font-[Satoshi]">Vacancies</p></li>
          <li><Link href="/contact"><p className="text-white font-[Satoshi]">Contact Us</p></Link></li>
          <li><p className="text-white font-[Satoshi]">Privacy</p></li>
          <li><p className="text-white font-[Satoshi]">Returns Policy</p></li>
        </ul>
      </div>

      {/* Mailing List */}
      <div>
        <p className="text-white mb-4">Join our mailing list</p>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-[#FFFFFF26] text-[#dcd6d6] px-4 py-2 rounded-md"
          />
          <button className="bg-white text-[#2A254B] px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <hr className="border-t border-gray-600 my-6" />
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="text-[14px] font-[Satoshi] text-white">
        Copyright 2022 Avion LTD
      </p>
      <div className="flex gap-5 mt-4 md:mt-0">
        <IoLogoLinkedin size={24} className="text-white" />
        <AiFillFacebook size={24} className="text-white" />
        <FaInstagram size={24} className="text-white" />
        <FaSkype size={24} className="text-white" />
        <GrTwitter size={24} className="text-white" />
        <FaPinterest size={24} className="text-white" />
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
