"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true); // Mark as submitted
    }, 500);
  };

  return (
    <div className="md:w-[600px] w-full mx-auto px-[20px] py-[50px]">
      {/* Show success message if submitted */}
      {isSubmitted ? (
        <div className='text-center'>
          <h1 className="text-[#2f4e61] font-[Clash Display] text-[24px] md:text-[32px] mb-[20px]">
            Success!
          </h1>
          <p className="text-[#244949] font-[Satoshi] text-[16px] md:text-[18px]">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      ) : (
        // Show form if not submitted
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[#302753] font-[Clash Display] text-[24px] md:text-[32px] mb-[20px]">
            Get in Touch
          </h1>
          <p className='text-[#505977] font-[Satoshi] text-[18px] md:text-[18px]'>"Have questions or want to learn more about our products?We're here to help.
            Fill out the form below and we'll get back response to you as soon as possible.",</p>
          <div className="flex flex-col gap-2">
            <label className="font-[Satoshi] text-[14px] md:text-[16px] text-[#322b5f]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[50px] border border-[#d9d9d9] rounded-lg px-[10px] text-[14px] md:text-[16px] text-[#505977] focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-[Satoshi] text-[14px] md:text-[16px] text-[#2A254B]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[50px] border border-[#d9d9d9] rounded-lg px-[10px] text-[14px] md:text-[16px] text-[#505977] focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-[Satoshi] text-[14px] md:text-[16px] text-[#2A254B]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[120px] border border-[#d9d9d9] rounded-lg p-[10px] text-[14px] md:text-[16px] text-[#505977] focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-[200px] h-[50px] bg-[#2A254B] text-white font-[Satoshi] text-[16px] rounded-lg mx-auto mt-[20px] hover:bg-[#1f1a3b] transition duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
