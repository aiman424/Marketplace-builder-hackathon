import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { LuSprout } from "react-icons/lu";

const featuresData = [
  {
    id: 1,
    icon: <TbTruckDelivery size={20} />,
    title: "Next Day as Standard",
    description:
      "Order before 3pm and get your order the next day as standard",
  },
  {
    id: 2,
    icon: <FaRegCircleCheck size={20} />,
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftsmanship",
  },
  {
    id: 3,
    icon: <HiOutlineCreditCard size={20} />,
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    id: 4,
    icon: <LuSprout size={20} />,
    title: "Recycled Packaging",
    description:
      "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];

const Features = () => {
  return (
    <div className="md:w-[1358px] md:h-[355px] w-[390px] h-auto">
      <div className="md:w-[366px] md:h-[34px] w-[274px] h-[56px] md:ml-[510px]">
        <p className="md:pt-[50px] md:text-center pl-[30px] md:pl-0 text-[22px] font-[Clash Display]">
          What makes our brand different
        </p>
      </div>

      <div className="w-[1358px] h-auto md:flex md:flex-row flex-col mt-[70px]">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="w-[270px] h-auto mt-[40px] md:ml-[30px] ml-[30px]"
          >
            <div>{feature.icon}</div>
            <div className="w-[270px] h-auto mt-[10px]">
              <h1 className="font-[Clash Display] text-[20px] leading-7">
                {feature.title}
              </h1>
              <p className="font-[Satoshi] text-[18px] leading-6 pt-[7px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

