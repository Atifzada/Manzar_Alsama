import { PACKAGES15, PACKAGES7 } from '@/constant'
import { printCustomRoutes } from 'next/dist/build/utils'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { RiArrowLeftSLine, RiArrowRightSLine, RiSearchLine, RiTimeLine } from "react-icons/ri";

const Packages = () => {
  return (
    <section className='max-container padding-container pt-16 bg-slate-100'>
      <h3 className="bold-52 text-center">Our Packages</h3>
      <p className='m-8 text-center'>
      Set out on unforgettable adventures with our thoughtfully curated packages, tailored to immerse you in the essence of every destination. Encounter opulence, excitement, and cultural diversity as you traverse the globe with us. Allow us to transform your travel aspirations into enduring memories.
      </p>
      {/* 7-seater packages */}
      <h3 className="bold-40 text-gray-500 relative">7 Seater Packages:</h3>
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12'>
        {PACKAGES7.map((card) => (
          <PackageItem 
          key= {card.title}
          title= {card.title}
          URL = {card.URL}
          price = {card.price}
          des = {card.des}
          duration = {card.duration}
          />
        ) 
        )}
      </div>
      {/* 15-Seater packages */}

      <h3 className="bold-40 text-gray-500">15 Seater Packages:</h3>
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12'>
        {PACKAGES15.map((card) => (
          <PackageItem 
          key= {card.title}
          title= {card.title}
          URL = {card.URL}
          price = {card.price}
          des = {card.des}
          duration = {card.duration}
          />
        ) 
        )}
      </div>

    </section>
  )
}
type PackageItem = {
  URL: string;
  title: string;
  price: string;
  des: string;
  duration: string;
}
const PackageItem = ({title, URL, price, des, duration}: PackageItem) => {
  // WhatsApp message template
  const whatsappMessage = `Hello! I would like to book the ${title} package for ${duration}. Please provide more details.`;
  const whatsappUrl = `https://wa.me/+971529042161?text=${encodeURIComponent(whatsappMessage)}`;
  
  return(
    <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-200 group'>
      <div className='overflow-hidden relative'>
        <Image 
        src={URL}
        alt='img'
        height={600}
        width={510}
        className='group-hove:scale-105 group-hover:rotate-2 transition-all duration-500'
        />
      </div>
      <div className='p-4 bg-white'>
        <div className='capitalize medium-18 flexBetween'>{title} <span className='medium-14'>{price}</span></div>
        <p className='text-gray-500 my-3 regular-14 border-b border-gray-200 pb-3'>{des}</p>
        <div className='flexBetween'>
          <p className='flexStart gap-2 text-gray-500'><RiTimeLine/><span className='medium-14'>{duration}</span></p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className='mediun-14 px-4 py-2 rounded-md border bg-black text-white hover:bg-gray-800 transition-colors'
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Packages