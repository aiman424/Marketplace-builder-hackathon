import React from 'react'
import Image from 'next/image';
import Features from '@/components/Features';
import Email from '@/components/Email';
import Footer from '@/components/Footer';
import Heroblock from '@/components/Heroblock';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const About = () => {
  return (
    <div>
        {/* top header */}
        <header className='w-[1358px] flex h-[41px] bg-[#2A254B]'>
        <div className='flex justify-center items-center gap-1 pl-[400px]'>
        <TbTruckDelivery size={20} className='ml-[80px]' />
        <p className='text-white'> 
        Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        </header>

        {/* Main header */}
        <nav className='w-[1358px] h-[134px]'>
            <div className='w-[1358px] h-[70px] pl-[10px] pt-[20px] flex '>
             <h1 className='text-[24px]'>Avion</h1>

             <div>
             <ul className='w-[215px] h-[22px] ml-[950px] mt-[8px] flex justify-end gap-4 items-end'>
                <li>About us</li>
                <li>Contact</li>
                <li>Blog</li>
             </ul>
             </div>

            <div className='w-[80px] h-[18px] flex ml-[30px] mt-[9px] gap-3'>
            <IoIosSearch size={20}/>
            <IoCartOutline size={20}/>
            <FaRegCircleUser size={20}/>
            </div>
         </div>
        
         <div className='w-[1358px] h-[64px] bg-[#F9F9F9]'>
         <div className='w-[675px] h-[22px] ml-[370px]'>
          <ul className='flex gap-[44px] font-[Satoshi] pt-[20px] text-[#726E8D] text-[16px]'>
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
           <li>Cutlery</li>
          </ul>
        </div>
         </div>
    </nav>

    <section>
        <div className='w-[1358px] h-[277px] flex justify-center items-center'>
            <div className='w-[704px] h-[100px] mr-[450px] '>
             <p className='text-[#2A254B] fon-[Clash display] text-[34px] pl-[10px] '>A brand build on the love of craftmanship,
             quality and outstanding customer services</p>
            </div>

            <div className='w-[192px] h-[56px] bg-[#F9F9F9] mr-[70px]'>
                <button className='w-[124x] h-[28px]  text-[#2A254B] px-[21px] py-[18px]'>View our products</button>
            </div>
        </div>
        
        <Heroblock/>

    

  
  <div className='w-[1358px] h-[580px] flex'>
    <div>
        <Image
        src={'/blackcouch.png'}
        alt='black couch'
        width={720}
        height={603}/>
    </div>

    <div className='w-[720px] h-[559px] bg-[#F9F9F9] ml-[9px]'>
        <div className="w-[536px] h-[225px] ml-[60px] pt-[45px]">
    <p className="w-[513px] h-[90px] font-[Clash Display] text-[24px] text-[#2A254B]">
      Our service isn&apos;t just personal, it&apos;s actually hyper personally exquite
    </p>
    <p className=' text-[#505977] pt-[10px] font-[Satoshi] pl-1'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
         
    <p className=' text-[#505977] font-[Satoshi] pt-[10px] text-[16px] pl-1'>Handmade, and lovingly crafted furniture and homeware is what we live,
     breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

     <button className='w-[156px] h-[56px] mt-[100px] ml-[1px] px-[30px] py-[18px] bg-[#ffffff] text-[#2A254B] font-[Satoshi] text-[16px]'>
          Get in touch
        </button>
    </div>
       </div>
  </div>
     
     <Features/>
     <Email/>
    
    </section>

    <Footer/>

    </div>
  )
}

export default About
