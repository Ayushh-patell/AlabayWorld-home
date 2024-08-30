'use client'
import { GamePreviewLinkData } from '@/app/GamePreviewLinkData'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'


const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})

const AfterScrollEl = ({gameName}) => {
    const featuresRef = useRef()
    const challengesRef = useRef()
    
    useEffect(() => {
        if(featuresRef.current) {
          featuresRef.current.innerHTML = GamePreviewLinkData[gameName].featuresHtml
        }
        if(challengesRef.current) {
            challengesRef.current.innerHTML = GamePreviewLinkData[gameName].challengeHtml
        }
      },[featuresRef, challengesRef])

  return (
    <div id='AfterScroll' className='w-full h-full absolute top-full left-0 z-10 px-24 pt-40 opacity-0 pointer-events-none'>
    <h5 className={`${mont.className} font-bold text-2xl my-3`} style={{color:`${GamePreviewLinkData[gameName].primaryClr}`}}>FEATURES</h5>
    <div ref={featuresRef} className={` w-2/3 text-left space-y-5 font-bold ${mont.className}`}></div>

    <h5 className={`${mont.className} font-bold mt-5`}>Challenge Modes</h5>
    <div ref={challengesRef} className={` w-2/3 text-left space-y-2 font-bold pl-2 ${mont.className}`}></div>

    <div className=' w-full mt-5 flex justify-start items-center gap-6'>
    <button className=' active:scale-90 transition-all duration-200 px-10 pl-4 py-3 flex justify-between items-center gap-5 rounded-full bg-white'>
            <Image src={'/play.png'} alt='play' width={30} height={30} className=' object-contain object-center' />
            <p className=' font-hel-normal font-bold text-lg text-[#201E26]'>PLAY</p>
          </button>
    <button className=' active:scale-90 transition-all duration-200 px-16 py-3 flex justify-between items-center gap-5 rounded-full bg-transparent border-4 border-white'>
            <p className=' font-hel-normal font-bold text-lg text-white'>EXIT</p>
          </button>
    </div>
  </div>
  )
}

export default AfterScrollEl
