"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";

// Define props for the Header component
interface HeaderProps {
  logo: string; // Dynamic logo text
  navLinks: Array<{ label: string; href: string }>;
}

const Header: React.FC<HeaderProps> = ({ logo, navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); 

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    // Additional logic can be added to change the language globally
    console.log("Language changed to:", lang);
  };

  return (
    <div>
      {/* Top Header */}
      <div className="md:w-[1358px] w-full md:h-[132px]">
        <div className="flex items-center justify-between w-full md:w-[1358px] h-[50px] px-4 md:px-0">
          {/* Search Icon */}
          <div className="flex items-center ml-[298px] lg:ml-0 w-6 lg:w-auto">
            <IoIosSearch size={30} className="text-gray-700" />
          </div>

          {/* Logo */}
          <p className="text-[24px] font-[Clash Display] text-center absolute md:static md:mx-auto md:left-1/2 md:transform md:-translate-x-1/2">
            {logo}
          </p>

          {/* Icons */}
          <div className="flex gap-4 items-center ml-[3px] md:ml-0">
            {/* Hamburger Menu */}
            <IoIosMenu size={25} 
            className="text-gray-700 md:hidden cursor-pointer"
            onClick={toggleMenu} />

            {/* Cart and User Icons */}
            <div className="hidden md:flex gap-3">
              <Link href="/cart">
               <IoCartOutline size={30} className="text-gray-700" />
              </Link>
              <Link href={'/wishlist'}>
              <FaRegHeart size={27} className="text-gray-700"/>
              </Link>
              <FaRegCircleUser size={27} className="text-gray-700" />
            </div>
          </div>
        </div>

        <Image
          src={'/Divider.png'}
          alt="divider"
          width={1358}
          height={2}
          className="hidden md:block"
        />

        {/* Navigation Links */}
        <div className="w-[675px] h-[22px] ml-[370px] hidden md:block mt-[20px]">
          <ul className="flex gap-[44px] font-[Satoshi] text-[16px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
