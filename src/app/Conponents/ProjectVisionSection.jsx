import { Kumbh_Sans } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const kumbh = Kumbh_Sans({subsets:['latin']})
const ProjectVisionSection = () => {
  return (
    <section className=' w-full bg-white'>
    <h2 className=' py-20 text-8xl text-center font-burga text-[#ffc700]'>PROJECT VISION</h2>
      <div className=' w-full px-5 relative'>
        <Image src={'/projectVision.png'} alt='dogs' width={1000} height={500} className=' relative z-10 w-[90%] mx-auto object-contain object-center'/>
        <p className={`${kumbh.className} relative z-10 font-bold text-3xl px-5 text-center text-[#353535] -translate-y-[100%]`}>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
        {/* BACKGORUND */}
  <div className=' absolute z-0 left-0 top-[10%] h-full w-full pointer-events-none'>
  <div aria-hidden className=' h-24 w-full bg-[#ffc700] pointer-events-none' style={{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)"}}/>
  <div id='ProjectVisionGradent' className='w-full h-[90%]'/>
  </div>
      </div>
    </section>
  )
}

export default ProjectVisionSection
