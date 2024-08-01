'use client'
import { Kumbh_Sans, Montserrat } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import gsap from 'gsap'

const kumbh = Kumbh_Sans({subsets:['latin']})
const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const HomeSliderScreen = () => {
    const [Open, setOpen] = useState(false);
    const [swipe, setswipe] = useState(null)
    let swipeTemp = 0

    const handleOpeningSlider = (e) => {
        if(e.deltaY >0) {
            setOpen(true)
            gsap.to('#HomeSlider', {bottom:"0%", duration:1})
            gsap.set('#HomeSlider', {overflow:'scroll'})
        }
    };

    const handleClosingSlider = (e) => {
        let mainSlider = document.getElementById('HomeSlider') 

        if(mainSlider.scrollTop === 0 && e.deltaY<0) {
            setOpen(false)
            gsap.to('#HomeSlider', {bottom:"-85%", duration:1})
            gsap.set('#HomeSlider', {overflow:'hidden'})
        }
    }

// DETECT TOUCH SWIPE FOR MOBILE
    const handleTouchStart = (e) => {
        swipeTemp = e.changedTouches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchEndY - swipeTemp;

        if (deltaY < 0) {
            setswipe('UP');
        } else if (deltaY > 0) {
            setswipe('DOWN');
        }
    };
 
    useEffect(() => {
        let mainSlider = document.getElementById('HomeSlider')
        const touchStartHandler = (e) => handleTouchStart(e);
        const touchEndHandler = (e) => handleTouchEnd(e);

        window.addEventListener('touchstart', touchStartHandler);
        window.addEventListener('touchend', touchEndHandler);

        if (!Open) {
            const wheelHandler = (e) => handleOpeningSlider(e);
            window.addEventListener('wheel', wheelHandler);

            return () => {
                window.removeEventListener('wheel', wheelHandler);
            };
        }
        else {
            if(mainSlider) {
                mainSlider.addEventListener('wheel', handleClosingSlider)
                return () => {
                    mainSlider.removeEventListener('wheel', handleClosingSlider)
                }
            }
        }
        return () => {
            window.removeEventListener('touchstart', touchStartHandler);
            window.removeEventListener('touchend', touchEndHandler);
        }
    }, [Open])
    
    // TO MAKE SURE THE SLIDER SHOW THE TOP IN THE BEGINING
    useEffect(() => {
        let mainSlider = document.getElementById('HomeSlider')
        if(mainSlider) {
            mainSlider.scrollTo(0,0)
        }
    },[])


    // SIMPLE BUTTON OPEN AND CLOSE
    const OpeningORClosingSlider = () => {
        if(!Open) {
            setOpen(true)
            gsap.to('#HomeSlider', {bottom:"0%", duration:1})
            gsap.set('#HomeSlider', {overflow:'scroll'})
        }
        else {
            setOpen(false)
            gsap.to('#HomeSlider', {bottom:"-85%", duration:1})
            gsap.set('#HomeSlider', {overflow:'hidden'})
        }
    }


    // OPEN and CLOSE WHEN USER SWIPES
    useEffect(() => {
        if(swipe === "UP") {
            setOpen(true)
            gsap.to('#HomeSlider', {bottom:"0%", duration:1})
            gsap.set('#HomeSlider', {overflow:'scroll'})
        }
        else if(swipe === "DOWN") {
            let mainSlider = document.getElementById('HomeSlider')
            if(mainSlider.scrollTop === 0) {
                setOpen(false)
                gsap.to('#HomeSlider', {bottom:"-85%", duration:1})
                gsap.set('#HomeSlider', {overflow:'hidden'})
            }
        }
    },[swipe]) 

  return (
    <main id='HomeSlider' className=' size-11/12 fixed z-50 rounded-xl bottom-[-85%] left-1/2 -translate-x-1/2 overflow-hidden bg-gradient-to-b from-[#ffc700] from-5% to-10% to-white'>
    {/* FIRST SECTION */}
    <section className=' relative h-[110%] w-full'>
    <div className=' py-4 flex justify-center items-center relative z-10'>
        <button onClick={OpeningORClosingSlider} className=' rounded-full bg-[#FFF6A1] w-32 h-3'></button>
    </div>

    <div className=' w-1/2 ml-auto relative z-10 text-right pr-14'>
        <h3 className={` text-[#F76902]/80 text-6xl ${mont.className} font-black my-12 mb-10`}>History Of</h3>
        <p className=' font-burga text-9xl text-white my-6'>ALABAY</p>
        <p className={` text-[#353535] ${kumbh.className} font-bold text-3xl`}>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
    </div>
    <Image src={'/sliderfirstDog.png'} alt='dog' width={700} height={1000} className=' pointer-events-none absolute z-10 left-0 top-[10%] w-1/2 object-contain object-center '/>
    <div id='HomeSliderGradient' className=' absolute top-0 left-0 z-0 pointer-events-none w-full h-full' style={{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0px 86.5%)"}}/>
    </section>
{/* CAROUSEL SECTION */}
<Carousel/>
    </main>
  )
}

export default HomeSliderScreen
