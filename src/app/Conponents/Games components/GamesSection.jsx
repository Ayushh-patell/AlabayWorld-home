import { Montserrat } from "next/font/google"
import GamesCarousel from "./GamesCarousel"
import GamePreviews from "./GamePreviews"

const mont = Montserrat({subsets:['cyrillic']})
const GameSection = () => {
  return (
    <section className=' w-full relative pt-10 bg-white'>
    <h3 className=' py-5 pt-40 text-9xl text-white font-burga text-center relative z-10'>GAMES</h3>

    {/* <h2 className=' text-9xl font-burga text-white pt-20 pb-28 px-10 relative z-10'>SOCIAL MEDIA <br /> LINKS</h2> */}
    <p className={` text-3xl text-[#353535] relative z-10 text-center ${mont.className} font-black py-3`}>Stay tuned for upcoming games !</p>

    {/* GAME CAROUSEL */}
    <GamesCarousel/>

    {/* <div className=' relative z-10 w-full'>
      <div aria-hidden className=' h-24 w-full bg-[#ffc700] pointer-events-none absolute z-0 top-0 left-0' style={{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)"}}/>
    </div> */}

    <GamePreviews/>

    <div className=' absolute top-0 left-0 w-full h-[60%] z-0' id='gamesGradient' style={{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)"}}></div>
      
    </section>
  )
}

export default GameSection
