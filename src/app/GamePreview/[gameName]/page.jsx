import { GamePreviewLinkData } from '@/app/GamePreviewLinkData'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import AfterScrollEl from './AfterScrollEl'
import ScrollBar from './ScrollBar'

const bebas = Bebas_Neue({subsets:['latin'], weight:['400'], adjustFontFallback:false})
const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})

const Page = ({params}) => {

  return (
    <div className=' w-screen h-dvh overflow-hidden bg-black relative'>
      {!!GamePreviewLinkData[params.gameName] ? 
      <main className=' w-full h-full px-24 py-10'>
        <div className=' w-full h-full relative z-10'>
          <h1 id='Heading' className=' relative font-baron text-white text-7xl my-4'>{GamePreviewLinkData[params.gameName].name}</h1>
          <h2 id='SubHeading' className={`${bebas.className} relative text-4xl tracking-[0.25em] my-5`} style={{color:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>{GamePreviewLinkData[params.gameName].subname}</h2>

          <div id='BeforeScroll' className=' w-full relative'>
            <p className={`${mont.className} font-bold text-white text-lg w-1/3`}>{GamePreviewLinkData[params.gameName].desc}</p>


            <button className=' active:scale-90 transition-all duration-200 px-10 pl-4 py-3 my-7 flex justify-between items-center gap-5 rounded-full' style={{backgroundColor:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>
              <Image src={'/play.png'} alt='play' width={30} height={30} className=' object-contain object-center' />
              <p className=' font-hel-normal font-bold text-lg text-[#201E26]'>PLAY</p>
            </button>

            <h4 className={` ${mont.className} font-bold text-white text-3xl mb-5 mt-20`}><span style={{color:`${GamePreviewLinkData[params.gameName].primaryClr}`}}>GAME</span> PREVIEWS</h4>

            <div className=' w-full flex justify-start items-center gap-5 overflow-x-scroll'>
              {GamePreviewLinkData[params.gameName].previewImgs.map((src,i) => <Image key={i} src={src} alt='preview' width={200} height={100} className=' h-40 rounded-2xl w-auto border border-white'/>)}
            </div>

          </div>
        </div>

          {/* SCROLL BAR */}
          <ScrollBar gameName={params.gameName}/>
        {/* AFTER SCROLL */}
          <AfterScrollEl gameName={params.gameName}/>


        {/* BACKGROUND IMAGE */}
      <Image src={GamePreviewLinkData[params.gameName].src} alt={GamePreviewLinkData[params.gameName].name} width={1000} height={700} className=' absolute top-0 left-0 w-screen h-dvh object-cover object-center pointer-events-none z-0'/>
      </main>
      :
      <div className=' w-screen h-dvh flex justify-center items-center text-3xl text-center bg-black text-white font-bold'>
        Invalid Link
      </div>
      }


  
  {/* <p>- <strong style="color:#90FFAE;">Exploration Mastery:</strong> A mode that rewards players for fully exploring every nook and cranny of the game&apos;s world, uncovering all secrets</p>
  
        <p>Explore a variety of landscapes, including <span style="color:#90FFAE;">mountains</span>, <span style="color:#90FFAE;">forests</span>, <span style="color:#90FFAE;">deserts</span>, and <span style="color:#90FFAE;">ancient ruins</span>.</p> */}
    </div>
  )
}

export default Page
