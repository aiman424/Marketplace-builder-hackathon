import React from 'react'
import Header from "@/components/Header";
import Heroblock from '@/components/Heroblock';
import Features from '@/components/Features';
import Product from '@/components/Product';
import Email from '@/components/Email';
import Plantpot from '@/components/Plantpot';
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Header logo={'Avion'} navLinks={[
          { label: "Plant pots", href: "/plantpot" },
          { label: "Ceramics", href: "/ceramics" },
          { label: "Tables", href: "/table" },
          { label: "Chairs", href: "/chairs" },
          { label: "Crockery", href: "/crockery" },
          { label: "Tableware", href: "/tableware" },
          { label: "Cutlery", href: "/cutlery" },
      ]}/>
      <Heroblock/>
      <Features/>
      <Product/>
      <Email/>
      <Plantpot/>
      <Footer/>
    </div>
  )
}

export default Home