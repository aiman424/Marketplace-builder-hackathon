import React from 'react'
import Image from 'next/image'

const Heroblock = () => {
  return (
    <section className='w-[1358px] md:h-[704px] h-[700px]'>
        <div className="container flex md:w-[1280px] md:h-[584px] w-[390px] h-[502px] bg-[#2A254B] ml-[10px] md:ml-[30px] mt-[30px]">
  {/* Left Content */}
  <div className="w-[513px] h-[187px] md:ml-[60px] ml-[30px] pt-[45px] ">
    <p className="md:w-[513px] md:h-[90px] w-[342px] h-[135px] font-[Clash Display] text-[36px] text-[#FFFFFF]">
      The furniture brand for the future, with timeless designs
    </p>
    
    <button className="w-[170px] h-[56px] mt-[10px] hidden md:block md:mt-[50px] px-[30px] py-[16px] text-[#ebe4e4] bg-[#F9F9F926]">
    View Collection
  </button>
   
    <p className="w-[342px] md:w-[602px] h-[135px] md:h-[81px] mt-[60px] md:mt-0 text-[18px] md:text-[19px]  md:pt-[200px]  font-[Satoshi] text-white mx-auto">
    A new era in eco-friendly furniture with Avelon, the French luxury retail brand
    with nice fonts, tasteful colors, and a beautiful way to display things digitally
    using modern web technologies.
  </p>
  <button className="md:w-[170px] md:h-[56px] block md:hidden w-[342px] h-[56px] mt-[30px] md:mt-[50px] px-[30px] py-[16px] text-[#ebe4e4] bg-[#F9F9F926]">
    View Collection
  </button>

  </div>

 
  {/* Right-Side Image */}
  <Image
    src="/hero.png"
    alt="hero image"
    width={560}
    height={300}
    className="ml-[187px] hidden md:block"
  />
</div>
    </section>
  )
}

export default Heroblock
