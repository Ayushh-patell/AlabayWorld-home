import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const SocialMediaLinksSection = () => {
  return (
    <div className=' w-full flex justify-between items-end p-5 pt-10 gap-5'>
    <div className=' w-1/2 p-20 pr-0'>
        <div className=' w-full relative'>
            <Image src={'/ChatBubble.svg'} alt='chat bubble' width={200} height={150} className=' relative z-0 w-full object-contain object-center'/>
            <div className=' absolute z-10 top-0 left-0 w-full h-full p-5 flex justify-center items-start flex-col gap-8'>
            
                <div className=' flex justify-start items-center gap-5 px-10'>
                <div className=' rounded-full p-3 bg-[#353535]'>
                <Image src={'/twitter.svg'} alt='twitter' width={100} height={100} className=' size-8 object-contain object-center'/>
                </div>
                <p className={`${mont.className} text-2xl font-black text-white`}>TWITTER LINK</p>
                </div>
            
                <div className=' flex justify-start items-center gap-5 px-10'>
                <div className=' rounded-full p-2 bg-[#353535]'>
                <Image src={'/telegram.svg'} alt='twitter' width={100} height={100} className=' size-10 object-contain object-center'/>
                </div>
                <p className={`${mont.className} text-2xl font-black text-white`}>TELEGRAM LINK</p>
                </div>

            </div>
        </div>
    </div>

    <div className=' w-1/2 relative z-10 h-full'>
        <Image src={'/SocialLinks.png'} alt=' dog' width={400} height={1000} className=' w-full px-10 absolute -bottom-10 left-1/2 -translate-x-1/2 object-contain object-center z-10' />
    </div>
    </div>
  )
}

export default SocialMediaLinksSection
