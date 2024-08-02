import { Kumbh_Sans, Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const kumbh = Kumbh_Sans({subsets:['latin']})
const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})

const RoadMapSection = () => {
  return (
    <section className=' w-full bg-white'>
    <h2 className=' text-9xl text-white font-burga text-left px-14 pt-10 pb-20 bg-[#ffc700] relative z-10'>ROAD MAP</h2>
      <div aria-hidden className=' h-24 w-full bg-[#ffc700] pointer-events-none' style={{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)"}}/>
      <div className=' w-full h-[500px] bg-white relative z-10'>
        <div className={` w-1/2 absolute left-10 top-0 ${kumbh.className} font-bold text-4xl text-[#353535]`}>
            <p>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</p>
            <p className=' my-5 text-[#ffc700]'>Join us as we grow and achieve new heights.</p>
        </div>
        <Image src={'/Road Map.png'} alt='Dog' width={500} height={600} className=' w-[45%] absolute right-10 bottom-0 object-contain object-center'/>
      </div>
    {/* ROADMAP GRID */}
      <div className={` grid px-24 py-5 grid-cols-4 gap-5 overflow-hidden ${mont.className} font-black text-2xl text-center`} style={{maskImage:"linear-gradient(180deg, black 40%, transparent 95%)"}}>
        <div className=' bg-[#DBC70C] rounded-ss-3xl flex-col flex justify-between items-center'>
        <div className=' px-5 pt-5'>
            <p>Community Building</p>
            <p className=' text-xl'>and Initial Launch</p>
        </div>
            <Image src={'/roadmap 1.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
        <div className=' bg-[#00D4D4] flex flex-col justify-between items-center'>
        <div className=' px-5 pt-5'>
            <p>Merchandise</p>
            <p className=' text-xl'>Store Launch</p>
        </div>
            <Image src={'/roadmap 2.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
        <div className=' bg-[#D427FF] flex flex-col justify-between items-center'>
        <div className=' px-5 pt-5'>
            <p>Community Events</p>
            <p className=' text-xl'>and contests</p>
        </div>
            <Image src={'/roadmap 3.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
        <div className=' bg-[#8F3A3C] flex-col rounded-se-3xl flex justify-between items-center'>
        <div className=' px-5 pt-5'>
            <p>Expansions and New</p>
            <p className=' text-xl'>Features</p>
        </div>
            <Image src={'/roadmap 4.png'} alt='dog' width={300} height={400} className=' w-full object-contain object-center'/>
        </div>
      </div>

    </section>
  )
}

export default RoadMapSection
