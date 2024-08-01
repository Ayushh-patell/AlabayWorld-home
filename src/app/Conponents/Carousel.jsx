import gsap from 'gsap'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const Carousel = () => {
    const [active, setactive] = useState('ALL')
    const SlideData = ['photo 1','photo 2','photo 3','photo 4','photo 5','photo 6','photo 7','photo 8','photo 9','photo 10','photo 11',]
    const [slide, setslide] = useState(1);
    const [updatedSlideData, setupdatedSlideData] = useState([]);
    const [slideNum, setslideNum] = useState(0)
    const [ismobile, setismobile] = useState(true)
    const [disableLeft, setdisableLeft] = useState(false)
    const [disableRight, setdisableRight] = useState(false)

    useEffect(() => {
        if(window) {
            let val = window.innerWidth<1024
            setismobile(val)
        }
    },[])
  
    useEffect(() => {
      let newarr = []
      if(window && window.innerWidth>1024) {
          for (let i = 0; i < SlideData.length; i+=3) {
  
              const subarray = SlideData.slice(i, i + 3);
  
              // Check if subarray has at least one element before pushing
              if (subarray.length > 0) {
                newarr.push(subarray);
              } 
          }

          let num = Math.ceil(SlideData.length/3)-1
          setslideNum(num+2)
      }
      else {
          newarr = SlideData
          setslideNum(SlideData.length+1)
      }
        //   ADD FIRST ELEMENT TO LAST AND LAST TO FIRST FOR INFINITE INTERVAL
        newarr.push(newarr[0])
        newarr.unshift(newarr[newarr.length-2])
        setupdatedSlideData(newarr)

    },[])
  
    const slideLeft = () => {
        setdisableLeft(true)
      if(slide>1) {
          let newslideval = slide -1
          setslide(newslideval)
          gsap.to(".Slide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})
        }
        else {
            let newslideval = slideNum-1
            setslide(newslideval)
            gsap.to(".Slide", {translateX:`-0%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableLeft(false)})})
            gsap.set('.Slide', {translateX:`-${newslideval*100}%`, delay:1})
            
      }
    }
    const slideRight = () => {
        setdisableRight(true)
        
        if(slide<slideNum-1) {
        let newslideval = slide +1
        setslide(newslideval)
            gsap.to(".Slide", {translateX:`-${newslideval*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
        }
        else {
            let newslideval = 1
            setslide(newslideval)
            gsap.to(".Slide", {translateX:`-${slideNum*100}%`, duration:1, ease:"power1.inOut", onComplete:(() => {setdisableRight(false)})})
            gsap.set('.Slide', {translateX:`-100%`, delay:1})
        }
    }
  

  return (
    <section className=' bg-white w-full py-10'>
    {/* TOP BAR TO SWITCH */}
        <div className={` w-full flex justify-center items-center gap-7 ${mont.className} font-black text-[#353535] mb-7`}>
            <button onClick={() => {setactive("ALL")}} className={`${active==="ALL" && " text-[#FFA800]"}`}>ALL</button>
            <button onClick={() => {setactive("PHOTOS")}} className={`${active==="PHOTOS" && " text-[#FFA800]"}`}>PHOTOS</button>
            <button onClick={() => {setactive("VIDEOS")}} className={`${active==="VIDEOS" && " text-[#FFA800]"}`}>VIDEOS</button>
        </div>
        {/* CAROUSEL */}
        <div className=' w-full flex justify-center items-center gap-7'>
            <button onClick={slideLeft} disabled={disableLeft} className=' active:scale-90 transition-all duration-300 w-10 flex-shrink-0 p-2 aspect-[3/4] rounded-lg bg-[#353535]' style={{boxShadow:'4px 3px 10px rgba(0,0,0,0.65)'}}><Image src={'/Arrow.svg'} alt='Arrow Left' width={50} height={50} className=' w-fulll rotate-180'/></button>
            <div className=' w-[80%] h-48 overflow-hidden'>
        {ismobile? 
                <div className=" w-full h-full overflow-hidden lg:hidden flex justify-start items-center relative px-5 py-1">
                    {updatedSlideData.map((data,i) => (
                        <div key={i} className='Slide -translate-x-full h-full w-full rounded-lg bg-[#a6a6a6] hover:ring-4 hover:ring-[#353535] flex justify-center items-center font-black text-black'>{data}</div>
                    ))}
                </div>
            :
            <div className=" w-full h-full overflow-hidden flex justify-start items-center relative">
                {updatedSlideData.map((arr,i) => (
                    <div key={i} className='Slide -translate-x-full w-full flex-shrink-0 h-full flex justify-start items-center gap-5 px-5 py-1'>
                    {arr.map((data, idx) => {
                    return <div key={idx} className=' h-full w-1/3 rounded-lg bg-[#a6a6a6] hover:ring-4 hover:ring-[#353535] flex justify-center items-center font-black text-black'>{data}</div>
                    })}
                    </div>
                ))}
            </div>
            }
            </div>
            <button onClick={slideRight} disabled={disableRight} className=' active:scale-90 transition-all duration-300 w-10 flex-shrink-0 p-2 aspect-[3/4] rounded-lg bg-[#353535]' style={{boxShadow:'4px 3px 10px rgba(0,0,0,0.65)'}}><Image src={'/Arrow.svg'} alt='Arrow Right' width={50} height={50} className=' w-ful'/></button>
        </div>
    </section>
  )
}

export default Carousel
