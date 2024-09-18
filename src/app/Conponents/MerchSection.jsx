"use client";

import gsap from 'gsap';
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { MerchCarouselData } from '../MerchCarouselData';

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const MerchSection = () => {
  const [slide, setslide] = useState(1);
  const [slideNum, setslideNum] = useState(MerchCarouselData.length);
  const [disableLeft, setdisableLeft] = useState(false);
  const [disableRight, setdisableRight] = useState(false);
  const timerRef = useRef();

  const slideLeft = () => {
    setdisableLeft(true)
  if(slide>1) {
      let newslideval = slide -1
      setslide(newslideval)
      gsap.to(".MerchSlide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})
    }
    else {
        let newslideval = slideNum;
        setslide(newslideval)
        gsap.to(".MerchSlide", {translateX:`-0%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})
        gsap.set('.MerchSlide', {translateX:`-${newslideval*100}%`, delay:1})
        
  }
}
const slideRight = () => {
    setdisableRight(true)
    
    if(slide<slideNum-1) {
    let newslideval = slide +1
    setslide(newslideval)
        gsap.to(".MerchSlide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
    }
    else {
        let newslideval = 0
        setslide(newslideval)
        gsap.to(".MerchSlide", {translateX:`-${(slideNum)*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
        gsap.set('.MerchSlide', {translateX:`0%`, delay:1})
    }
}


useEffect(() => {
  clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    slideRight();
  }, 3000);

  return () => clearInterval(timerRef.current)
},[slide])



  return (
    <section className=' w-full md_2:py-10 sm_0_1:py-32 py-20 bg-white relative'>

<div id='mobileMerchGradient' className=' absolute top-0 left-0 w-full h-full z-0' style={{clipPath:"polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)"}}></div>
      <h2 className=' md_2:text-9xl sm:text-7xl sm_1:text-5xl text-4xl font-burga md_2:text-[#FFA800] text-white md_2:mb-5 md_2:pb-0 sm_1:pb-5 pb-0 text-center md_2:bg-transparent relative z-10 '>MERCHANDISE</h2>
      {/* <p className={` ${mont.className} md_2:text-[#ffc700] text-[#353535] md_2:text-2xl sm:text-lg sm_1:text-sm text-[10px] font-black text-center md_2:bg-transparent relative z-10 `}>Tshirts, Hoodies, Coffee-Mugs, Caps and many more !</p> */}

      {/* MERCH CAROUSEL */}
      <div className=' w-full sm_1:p-8 p-4 md_2:px-16 sm_1:px-0 px-0 flex justify-start items-center relative overflow-hidden z-10 md_2:bg-transparent'>

{/* THE LAST MERCH DATA AT THE FRONT FOR INFINITE CAROUSEL DESIGN */}
      <div className=' MerchSlide flex-shrink-0 w-full h-fit flex justify-center items-center relative -translate-x-full'>
  <Image src={MerchCarouselData[MerchCarouselData.length-1].bgSrc} alt='background' width={1000} height={500} className=' xl:w-[70%] md_2:w-4/5 w-[90%] rounded-2xl object-contain object-center relative z-0'/>
  <Image src={MerchCarouselData[MerchCarouselData.length-1].merchSrc} alt='cap' width={500} height={500} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3 z-10'/>
  <button className={` active:scale-90 transition-all duration-300 bg-[#1F2029] sm_1:px-5 px-3 sm_0_1:py-2 py-1 lg:w-[20%] w-[30%] rounded-full lg:text-xl md:text-lg sm_0_1:text-base sm_1:text-sm text-xs absolute left-1/2 -translate-x-[49%] bottom-[7%] z-10 ${mont.className} font-medium`}>Discover</button>
  <p className={` ${mont.className} font-black text-black lg:text-lg md:text-base sm_0_1:text-sm sm_1:text-xs text-[9px] absolute z-10 md_2:right-[22%] right-[18%] top-[20%]`}>Coming Soon...</p>
</div>

{MerchCarouselData && MerchCarouselData.map((data,i) => (
  <div key={i} className=' MerchSlide flex-shrink-0 w-full h-fit flex justify-center items-center relative -translate-x-full'>
  <Image src={data.bgSrc} alt='background' width={1000} height={500} className=' xl:w-[70%] md_2:w-4/5 w-[90%] rounded-2xl object-contain object-center relative z-0'/>
  <Image src={data.merchSrc} alt='cap' width={500} height={500} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3 z-10'/>
  <button className={` active:scale-90 transition-all duration-300 bg-[#1F2029] sm_1:px-5 px-3 sm_0_1:py-2 py-1 lg:w-[20%] w-[30%] rounded-full lg:text-xl md:text-lg sm_0_1:text-base sm_1:text-sm text-xs absolute left-1/2 -translate-x-[49%] bottom-[7%] z-10 ${mont.className} font-medium`}>Discover</button>
  <p className={` ${mont.className} font-black text-black lg:text-lg md:text-base sm_0_1:text-sm sm_1:text-xs text-[9px] absolute z-10 md_2:right-[22%] right-[18%] top-[20%]`}>Coming Soon...</p>
</div>
))}
{/* THE FIRST MERCH DATA AT THE FRONT FOR INFINITE CAROUSEL DESIGN */}
<div className=' MerchSlide flex-shrink-0 w-full h-fit flex justify-center items-center relative -translate-x-full'>
  <Image src={MerchCarouselData[0].bgSrc} alt='background' width={1000} height={500} className=' xl:w-[70%] md_2:w-4/5 w-[90%] rounded-2xl object-contain object-center relative z-0'/>
  <Image src={MerchCarouselData[0].merchSrc} alt='cap' width={500} height={500} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3 z-10'/>
  <button className={` active:scale-90 transition-all duration-300 bg-[#1F2029] sm_1:px-5 px-3 sm_0_1:py-2 py-1 lg:w-[20%] w-[30%] rounded-full lg:text-xl md:text-lg sm_0_1:text-base sm_1:text-sm text-xs absolute left-1/2 -translate-x-[49%] bottom-[7%] z-10 ${mont.className} font-medium`}>Discover</button>
  <p className={` ${mont.className} font-black text-black lg:text-lg md:text-base sm_0_1:text-sm sm_1:text-xs text-[9px] absolute z-10 md_2:right-[22%] right-[18%] top-[20%]`}>Coming Soon...</p>
</div>


{/* OLD DESIGN */}
      {/* <div className=' flex-shrink-0 w-full px-1 flex justify-center items-center -translate-x-full relative'>

        <div className=' w-full xl:h-[350px] lg:h-[320px] md_2:h-[260px] sm:h-[230px] sm_0_1:h-[170px] sm_2:h-[140px] h-[120px] rounded-3xl bg-[#E1F8DC] md:pl-16 sm_1:pl-8 pl-4 flex justify-between items-center gap-3'>
          <div className=' sm_2:w-1/3 w-[30%] h-full flex flex-col justify-center items-start'>
            <p className=' text-[#9d9460]/85 font-burga xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm'>DESIGNS</p>
            <p className=' xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm font-burga text-[#353535]'>PAW-FECTLY</p>
            <p className=' font-hel-bold md_2:text-xl sm:text-base text-[9px] md_2:text-[#353535] text-white sm:mb-6 mb-3'>Suited for you!</p>
            <button className={` rounded-full md_2:px-5 sm:px-3 px-2 md_2:py-3 sm:py-2 py-1 flex justify-center items-center gap-3 sm:text-white text-[9px] bg-[#353535] ${mont.className}`}>Discover<Image src={'/Thin Arrow.png'} alt='arrow' width={12} height={12} className=' object-contain object-center'/></button>
          </div>

          <div className=' sm_2:w-2/3 w-[70%] h-full'>
            <Image src={'/tshirt mockup 2.png'} alt='tshirt' width={300} height={150} className=' w-full h-full object-cover object-right-bottom'/>
          </div>

        </div>
      </div>
        <div className=' flex-shrink-0 w-full px-1 flex justify-center items-center -translate-x-full relative'>

        <div className=' w-full xl:h-[350px] lg:h-[320px] md_2:h-[260px] sm:h-[230px] sm_0_1:h-[170px] sm_2:h-[140px] h-[120px] rounded-3xl md_2:bg-[#FFEE88DD]/85 bg-[#AD6EFF] md:pl-16 sm_1:pl-8 pl-4 flex justify-between items-center gap-3'>
          <div className=' sm_2:w-1/3 w-[30%] h-full flex flex-col justify-center items-start'>
            <p className=' md_2:text-[#9d9460]/85 text-[#FFF280] font-burga xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm'>DESIGNS</p>
            <p className=' xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm font-burga md_2:text-[#353535] text-white'>PAW-FECTLY</p>
            <p className=' font-hel-bold md_2:text-xl sm:text-base text-[9px] md_2:text-[#353535] text-white sm:mb-6 mb-3'>Suited for you!</p>
            <button className={` rounded-full md_2:px-5 sm:px-3 px-2 md_2:py-3 sm:py-2 py-1 flex justify-center items-center gap-3 sm:text-xs text-[9px] text-white bg-[#353535] ${mont.className}`}>Discover<Image src={'/Thin Arrow.png'} alt='arrow' width={12} height={12} className=' object-contain object-center'/></button>
          </div>

          <div className=' sm_2:w-2/3 w-[70%] h-full'>
            <Image src={'/tshirt mockup 2.png'} alt='tshirt' width={300} height={150} className=' w-full h-full object-cover object-right-bottom'/>
          </div>

        </div>
        </div>
        <div className=' flex-shrink-0 w-full px-1 flex justify-center items-center -translate-x-full relative'>

        <div className=' w-full xl:h-[350px] lg:h-[320px] md_2:h-[260px] sm:h-[230px] sm_0_1:h-[170px] sm_2:h-[140px] h-[120px] rounded-3xl bg-[#F7D8BA] md:pl-16 sm_1:pl-8 pl-4 flex justify-between items-center gap-3'>
          <div className=' sm_2:w-1/3 w-[30%] h-full flex flex-col justify-center items-start'>
            <p className=' text-[#9d9460]/85 font-burga xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm'>DESIGNS</p>
            <p className=' xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm font-burga text-[#353535]'>PAW-FECTLY</p>
            <p className=' font-hel-bold md_2:text-xl sm:text-base text-xs md_2:text-[#353535] text-white sm:mb-6 mb-3'>Suited for you!</p>
            <button className={` rounded-full md_2:px-5 sm:px-3 px-2 md_2:py-3 sm:py-2 py-1 flex justify-center items-center gap-3 sm:text-white text-[9px] bg-[#353535] ${mont.className}`}>Discover<Image src={'/Thin Arrow.png'} alt='arrow' width={12} height={12} className=' object-contain object-center'/></button>
          </div>

          <div className=' sm_2:w-2/3 w-[70%] h-full'>
            <Image src={'/tshirt mockup 2.png'} alt='tshirt' width={300} height={150} className=' w-full h-full object-cover object-right-bottom'/>
          </div>

        </div>
        </div>
        <div className=' flex-shrink-0 w-full px-1 flex justify-center items-center -translate-x-full relative'>

        <div className=' w-full xl:h-[350px] lg:h-[320px] md_2:h-[260px] sm:h-[230px] sm_0_1:h-[170px] sm_2:h-[140px] h-[120px] rounded-3xl bg-[#FFEE88DD]/85 md:pl-sm_1:16 pl pl-4-8 flex justify-between items-center gap-3'>
          <div className=' sm_2:w-1/3 w-[30%] h-full flex flex-col justify-center items-start'>
            <p className=' text-[#9d9460]/85 font-burga xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm'>DESIGNS</p>
            <p className=' xl:text-6xl lg:text-5xl md_2:text-4xl sm:text-3xl sm_1:text-xl text-sm font-burga text-[#353535]'>PAW-FECTLY</p>
            <p className=' font-hel-bold md_2:text-xl sm:text-base text-xs md_2:text-[#353535] text-white sm:mb-6 mb-3'>Suited for you!</p>
            <button className={` rounded-full md_2:px-5 sm:px-3 px-2 md_2:py-3 sm:py-2 py-1 flex justify-center items-center gap-3 sm:text-white text-[9px] bg-[#353535] ${mont.className}`}>Discover<Image src={'/Thin Arrow.png'} alt='arrow' width={12} height={12} className=' object-contain object-center'/></button>
          </div>

          <div className=' sm_2:w-2/3 w-[70%] h-full'>
            <Image src={'/tshirt mockup 2.png'} alt='tshirt' width={300} height={150} className=' w-full h-full object-cover object-right-bottom'/>
          </div>

        </div>
        </div> */}
{/* OLD DESIGN */}


        <button onClick={slideLeft} disabled={disableLeft} className=' absolute top-1/2 -translate-y-1/2 md:left-10 sm_1:left-4 left-2 rounded-full p-1 bg-white shadow-xl'>
            <Image src={'/merchArrow.svg'} alt='Arrow Left' width={50} height={50} className=' rotate-180 sm:size-10 size-6 object-contain object-center'/>
        </button>
        <button onClick={slideRight} disabled={disableRight} className=' absolute top-1/2 -translate-y-1/2 md:right-10 sm_1:right-4 right-2 rounded-full p-1 bg-white shadow-xl'>
            <Image src={'/merchArrow.svg'} alt='Arrow Right' width={50} height={50} className=' sm:size-10 size-6 object-contain object-center'/>
        </button>
      </div>


{/* OLD DESIGN */}
      {/* <div className=' w-full sm:px-20 px-10 py-5 grid grid-cols-4 md_2:gap-2 sm:gap-7 gap-5 relative z-10 md_2:bg-transparent '>
        <div className=' aspect-square sm:rounded-3xl rounded-xl bg-[#7BE698] flex justify-center items-center sm:p-5 p-2 sm:ring-8 ring-4 ring-white'>
            <Image src={'/tshirt 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>
        <div className=' aspect-square sm:rounded-3xl rounded-xl bg-[#F6E6FF] flex justify-center items-center sm:p-5 p-2 sm:ring-8 ring-4 ring-white'>
            <Image src={'/hoodie 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>
        <div className=' aspect-square sm:rounded-3xl rounded-xl bg-[#F8C29C] flex justify-center items-center sm:p-5 p-2 sm:ring-8 ring-4 ring-white'>
            <Image src={'/cap 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>
        <div className=' aspect-square sm:rounded-3xl rounded-xl bg-[#69EBED] flex justify-center items-center sm:p-5 p-2 sm:ring-8 ring-4 ring-white'>
            <Image src={'/cup 1.png'} alt='tshirt' width={200} height={200} className=' w-full h-full object-contain object-center'/>
        </div>

        <p className=' font-burga md_2:text-3xl sm:text-2xl text-lg text-center text-[#353535]'>TSHIRT</p>
        <p className=' font-burga md_2:text-3xl sm:text-2xl text-lg text-center text-[#353535]'>HOODIE</p>
        <p className=' font-burga md_2:text-3xl sm:text-2xl text-lg text-center text-[#353535]'>CAP</p>
        <p className=' font-burga md_2:text-3xl sm:text-2xl text-lg text-center text-[#353535]'>CUP</p>
      </div> */}
{/* OLD DESIGN */}


      {/* BACKGROUND */}
      <div aria-hidden className=' md_2:block hidden absolute z-0 bottom-0 left-0 w-full'>
      <div aria-hidden className=' h-24 w-full bg-[#ffc700] pointer-events-none ' style={{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)"}}/>
      <div className=' bg-[#ffc700] h-24 w-full'></div>
      </div> 

    </section>
  )
}

export default MerchSection
