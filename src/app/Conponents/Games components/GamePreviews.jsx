import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const GamePreviews = () => {
  return (
    <div className=' w-full py-16 px-24'>
      <h3 className={` text-[#FFA800] font-black text-4xl ${mont.className} my-5`}>GAME <span className=' text-[#353535]'>PREVIEWS</span></h3>

      <div className=' w-full py-10 pt-0 flex justify-start items-center gap-4'>
        <div className=' w-11/12 overflow-hidden flex justify-start items-center gap-7'>
            <Image src={'/preview-1.png'} alt='preview' width={300} height={300} className=' flex-shrink w-[30%] aspect-square'/>
            <Image src={'/preview-2.png'} alt='preview' width={300} height={300} className=' flex-shrink w-[30%] aspect-square'/>
            <Image src={'/preview-3.png'} alt='preview' width={300} height={300} className=' flex-shrink w-[30%] aspect-square'/>
        </div>
        <button className=' active:scale-90 transition-all duration-300 w-10 flex-shrink-0 p-2 aspect-[3/4] rounded-lg bg-[#353535]' style={{boxShadow:'4px 3px 10px rgba(0,0,0,0.65)'}}><Image src={'/Arrow.svg'} alt='Arrow Right' width={50} height={50} className=' w-full'/></button>
{/* onClick={slideRight} disabled={disableRight} */}
      </div>
    </div>
  )
}

export default GamePreviews
