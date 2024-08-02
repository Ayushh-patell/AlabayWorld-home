import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const MerchSection = () => {
  return (
    <section className=' w-full pt-10 bg-white relative'>
      <h2 className=' text-9xl font-burga text-[#353535] mb-5 text-center'>MERCH STORE</h2>
      <p className={` ${mont.className} text-[#ffc700] text-2xl font-black text-center`}>Tshirts, Hoodies, Coffee-Mugs, Caps and many more !</p>

      {/* MERCH CAROUSEL */}
      <div className=' w-full p-8 px-16 flex justify-start items-center gap-2 relative overflow-hidden z-10'>
        <div className=' w-full h-[250px] rounded-3xl bg-yellow-300 flex-shrink-0 -translate-x-full'></div>
        <div className=' w-full h-[250px] rounded-3xl bg-yellow-300 flex-shrink-0 -translate-x-full'></div>
        <div className=' w-full h-[250px] rounded-3xl bg-yellow-300 flex-shrink-0 -translate-x-full'></div>
        <div className=' w-full h-[250px] rounded-3xl bg-yellow-300 flex-shrink-0 -translate-x-full'></div>

        <div className=' absolute top-1/2 -translate-y-1/2 left-10 rounded-full p-1 bg-white shadow-xl'>
            <Image src={'/merchArrow.svg'} alt='Arrow Left' width={50} height={50} className=' rotate-180 size-10 object-contain object-center'/>
        </div>
        <div className=' absolute top-1/2 -translate-y-1/2 right-10 rounded-full p-1 bg-white shadow-xl'>
            <Image src={'/merchArrow.svg'} alt='Arrow Right' width={50} height={50} className=' size-10 object-contain object-center'/>
        </div>
      </div>


      <div className=' w-full px-20 py-5 grid grid-cols-4 gap-2 relative z-10'>
        <div className=' aspect-square rounded-3xl bg-[#7BE698] flex justify-center items-center p-5 ring-8 ring-white'>
            <Image src={'/tshirt 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>
        <div className=' aspect-square rounded-3xl bg-[#F6E6FF] flex justify-center items-center p-5 ring-8 ring-white'>
            <Image src={'/hoodie 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>
        <div className=' aspect-square rounded-3xl bg-[#F8C29C] flex justify-center items-center p-5 ring-8 ring-white'>
            <Image src={'/cap 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>
        <div className=' aspect-square rounded-3xl bg-[#69EBED] flex justify-center items-center p-5 ring-8 ring-white'>
            <Image src={'/cup 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>

        <p className=' font-burga text-3xl text-center text-[#353535]'>TSHIRT</p>
        <p className=' font-burga text-3xl text-center text-[#353535]'>HOODIE</p>
        <p className=' font-burga text-3xl text-center text-[#353535]'>CAP</p>
        <p className=' font-burga text-3xl text-center text-[#353535]'>CUP</p>
      </div>
      {/* BACKGROUND */}
      <div aria-hidden className=' absolute z-0 bottom-0 left-0 w-full'>
      <div aria-hidden className=' h-24 w-full bg-[#ffc700] pointer-events-none ' style={{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)"}}/>
      <div className=' bg-[#ffc700] h-24 w-full'></div>
      </div>
        

    </section>
  )
}

export default MerchSection
