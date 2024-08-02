import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false})
const TokenomicsSection = () => {
  return (
    <section className=" w-full bg-white pt-10">

      <div id="tokenomicsGradient" className=" pt-20" style={{clipPath:"polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)"}}>
        <h2 className=" text-9xl font-burga p-10">TOKENOMICS</h2>
        <div className=" flex justify-between items-center gap-2 p-4">
          <div className={` w-1/2 flex justify-center items-center flex-col gap-7 ${mont.className} font-black text-2xl`}>
            <div className=" bg-[#353535] rounded-2xl p-5 w-1/2" style={{boxShadow:"10px 10px 15px #A87D29"}}>
                <p>LIQUIDITY</p>
                <p className=" text-[#FFF280] text-3xl">LOCKED</p>
            </div>
            <div className=" bg-[#353535] rounded-2xl p-5 w-1/2" style={{boxShadow:"10px 10px 15px #A87D29"}}>
                <p>CONTRACT</p>
                <p className=" text-[#FFF280] text-3xl">RENOUNCED</p>
            </div>
            <div className=" bg-[#353535] rounded-2xl p-5 w-1/2" style={{boxShadow:"10px 10px 15px #A87D29"}}>
                <p>TAXES</p>
                <p className=" text-[#FFF280] text-3xl">0%</p>
            </div>
          </div>
          <Image
            src={"/tokenomics.png"}
            alt="dog"
            width={400}
            height={500}
            className=" w-[45%] object-contain object-center"
          />
        </div>
      </div>

    </section>
  );
};

export default TokenomicsSection;
