import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const plantpotData = {
  heading: "From a studio in London to a global brand with over 400 outlets",
  description1:
    "When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.",
  description2:
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.",
  buttonText: "Get in touch",
  image: {
    src: "/plant.png",
    alt: "plantpot",
    width: 720,
    height: 603,
  },
};

const Plantpot = () => {
  return (
    <div>
      {/* Main container */}
      <div className="md:w-[1358px] md:h-[603px] w-[390px] h-[828px] md:flex grid grid-cols-1">
        {/* Left side */}
        <div className="md:w-[536px] md:h-[227px] md:ml-[84px] ml-[30px] mt-[72px] flex flex-col gap-4">
          <h1 className="w-[274px] h-[84px] md:w-[536px] md:h-[227px] font-[Clash Display] text-[20px] md:text-[24px] text-[#2A254B] md:pl-[5px]">
            {plantpotData.heading}
          </h1>
          <p className="text-[#505977] font-[Satoshi] pl-1">
            {plantpotData.description1}
          </p>
          <p className="text-[#505977] font-[Satoshi] text-[16px] pl-1">
            {plantpotData.description2}
          </p>
          <Link href='/contact'>
          <button className="md:w-[156px] md:h-[56px] w-[342px] h-[56px] md:mt-[200px] md:ml-[1px] px-[30px] py-[18px] bg-[#F9F9F9] text-[#2A254B] font-[Satoshi] text-[16px]">
            {plantpotData.buttonText}
          </button></Link>
        </div>

        {/* Right side */}
        <div>
          <Image
            src={plantpotData.image.src}
            alt={plantpotData.image.alt}
            width={plantpotData.image.width}
            height={plantpotData.image.height}
            className="md:ml-[70px] ml-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Plantpot;
