"use client";
import React, { useState } from 'react';

const Email = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setMessage('Thank you for signing up!');
    setEmail('');
  };

  return (
    <div className="md:w-[1358px] md:h-[481px] w-[309px] h-[292px]">
      <div className="h-[481px] flex justify-center md:bg-[#F9F9F9]">
        <div className="container w-[1237px] h-[364px] mt-[40px] bg-[#FFFFFF]">
          <div className="md:w-[571px] md:h-[114px] w-[329px] h-[86px] mt-[68px] md:ml-[330px] ml-[240px]">
            <h1 className="md:text-[36px] text-[20px] font-[Clash Display] text-center">
              Join the club and get the benefits
            </h1>
            <p className="md:text-[16px] text-[14px] font-[Satoshi] pt-[20px] text-center px-[10px] md:px-[70px]">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[472px] flex flex-col items-center md:ml-[380px] ml-[240px] mt-[60px] md:mt-[100px]"
          >
            <div className="flex w-full">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="md:w-[354px] md:h-[50px] w-[224px] h-[50px] bg-[#F9F9F9] text-[#333] pl-[25px] border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="w-[118px] h-[50px] px-[30px] py-[14px] bg-[#2A254B] text-white"
              >
                Sign up
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-[14px] mt-[10px]">{error}</p>
            )}
            {message && (
              <p className="text-green-500 text-[14px] mt-[10px]">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
