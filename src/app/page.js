import Image from "next/image";
import HomeSliderScreen from "./Conponents/HomeSliderScreen";

export default function Home() {
  return (
    <div className=" w-screen h-dvh overflow-hidden">
        <div className=" flex justify-center items-center w-full p-5 py-9 relative">
        <h1 className=" textShadow text-8xl whitespace-nowrap font-burga bg-clip-text bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] text-transparent relative z-10">WELCOME TO ALABAY WORLD</h1>
        <h2 aria-hidden className=" strokeText text-8xl whitespace-nowrap font-burga text-mainBlack absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">WELCOME TO ALABAY WORLD</h2>
        </div>

        <div className=" absolute top-2/3 left-0 w-full p-5 text-center font-burga text-white bg-mainBlack text-3xl">
        where the <span className=" text-transparent bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text">legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span className=" text-transparent bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text">Join us</span> in celebrating the <span className=" text-transparent bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text">strength, loyalty,</span> and <span className=" text-transparent bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text">heritage</span> of the Alabay breed.
        </div>

        <HomeSliderScreen/>
        <Image src={'/HomeBG.png'} alt="Bg" aria-hidden width={1500} height={700} className=" fixed z-[-5] w-screen h-dvh pointer-events-none object-cover object-center top-0 left-0"/>
    </div>
  );
}
