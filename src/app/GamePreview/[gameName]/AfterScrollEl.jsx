'use client'
import { GamePreviewLinkData } from '@/app/GamePreviewLinkData'
import { Montserrat } from 'next/font/google'
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
    <div className='w-full h-full relative z-10 pt-20'>
    <h5 className={`${mont.className} font-bold text-2xl my-3`} style={{color:`${GamePreviewLinkData[gameName].primaryClr}`}}>FEATURES</h5>
    <div ref={featuresRef} className={` w-2/3 text-left space-y-5 font-bold ${mont.className}`}></div>

    <h5 className={`${mont.className} font-bold mt-5`}>Challenge Modes</h5>
    <div ref={challengesRef} className={` w-2/3 text-left space-y-2 font-bold pl-2 ${mont.className}`}></div>
  </div>
  )
}

export default AfterScrollEl
